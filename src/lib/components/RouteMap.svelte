<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { TelemetryPoint } from '../types/activity';
	import { t, interpolate } from '$lib/i18n';
	import {
		Navigation,
		Layers,
		MapPin,
		Dumbbell,
		Mountain,
		Satellite,
		Map as MapIcon,
		AlertCircle,
		ShieldAlert
	} from 'lucide-svelte';

	export let routePoints: TelemetryPoint[] = [];
	export let activityTitle: string = 'Percurso';
	export let status: string = 'Valid';
	export let activityType: string = 'Corrida';

	let mapContainer: HTMLElement;
	let mapInstance: any = null;
	let polylineLayer: any = null;
	let markersLayer: any = null;
	let currentBaseLayer: any = null;
	let activeLayerType: 'satellite' | 'terrain' | 'streets' = 'satellite';

	const mapLayers = {
		satellite: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
		terrain: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
		streets: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
	};

	$: hasGpsData = routePoints && routePoints.length > 0;

	$: if (browser && mapInstance && (routePoints || activeLayerType || activityTitle || $t)) {
		renderRoute();
	}

	async function switchLayer(type: 'satellite' | 'terrain' | 'streets') {
		if (!browser || !mapInstance) return;
		activeLayerType = type;

		const L = await import('leaflet');

		if (currentBaseLayer) {
			mapInstance.removeLayer(currentBaseLayer);
		}

		currentBaseLayer = L.tileLayer(mapLayers[type], {
			maxZoom: 20,
			subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
			attribution: '© Google Maps'
		}).addTo(mapInstance);
	}

	async function initMap() {
		if (!browser || !mapContainer) return;

		const L = await import('leaflet');

		if (mapInstance) {
			mapInstance.remove();
		}

		// Inicializa no centro do Brasil ou na coordenada real do primeiro ponto obtido do relógio
		const initialLat = routePoints.length > 0 ? routePoints[0].latitude : -14.235;
		const initialLon = routePoints.length > 0 ? routePoints[0].longitude : -51.9253;
		const initialZoom = routePoints.length > 0 ? 16 : 4;

		mapInstance = L.map(mapContainer, {
			attributionControl: false,
			zoomControl: true
		}).setView([initialLat, initialLon], initialZoom);

		currentBaseLayer = L.tileLayer(mapLayers[activeLayerType], {
			maxZoom: 20,
			subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
		}).addTo(mapInstance);

		markersLayer = L.layerGroup().addTo(mapInstance);
		polylineLayer = L.layerGroup().addTo(mapInstance);

		renderRoute();
	}

	async function renderRoute() {
		if (!browser || !mapInstance) return;

		const L = await import('leaflet');

		markersLayer.clearLayers();
		polylineLayer.clearLayers();

		// Se o dispositivo NÃO gravou pontos GPS nesta atividade
		if (!routePoints || routePoints.length === 0) {
			return;
		}

		// Caso 1: O dispositivo registrou 1 ponto GPS de localização exata
		if (routePoints.length === 1) {
			const pt = routePoints[0];
			const strokeColor =
				status?.toLowerCase() === 'valid'
					? '#10b981'
					: status?.toLowerCase() === 'suspect'
					? '#f59e0b'
					: '#ef4444';

			const markerIcon = L.divIcon({
				className: 'device-location-marker',
				html: `
					<div style="position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
						<span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: ${strokeColor}40; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
						<div style="width: 32px; height: 32px; border-radius: 50%; background: ${strokeColor}; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 14px ${strokeColor}; color: white; font-weight: bold; font-size: 14px;">
							📍
						</div>
					</div>
				`,
				iconSize: [40, 40],
				iconAnchor: [20, 20]
			});

			L.marker([pt.latitude, pt.longitude], { icon: markerIcon })
				.bindPopup(`
					<div style="font-family: monospace; font-size: 12px; line-height: 1.5;">
						<b style="color: #38bdf8;">${$t.routeMap.popupLocation}</b><br>
						<b>${$t.routeMap.popupActivity}</b> ${activityTitle}<br>
						<b>Lat:</b> ${pt.latitude.toFixed(6)}<br>
						<b>Lon:</b> ${pt.longitude.toFixed(6)}<br>
						${pt.heartRateBpm ? `<b>${$t.routeMap.popupHeartRate}</b> ${pt.heartRateBpm} BPM<br>` : ''}
						${pt.instantSpeedKmh > 0 ? `<b>${$t.routeMap.popupSpeed}</b> ${pt.instantSpeedKmh} km/h` : ''}
					</div>
				`)
				.addTo(markersLayer);

			mapInstance.flyTo([pt.latitude, pt.longitude], 17, { duration: 1.0 });
			return;
		}

		// Caso 2: O dispositivo registrou múltiplos pontos de percurso GPS (Corrida, Ciclismo, Caminhada)
		const latLngs = routePoints.map((p) => [p.latitude, p.longitude] as [number, number]);

		const strokeColor =
			status?.toLowerCase() === 'valid'
				? '#10b981'
				: status?.toLowerCase() === 'suspect'
				? '#f59e0b'
				: '#ef4444';

		const polyline = L.polyline(latLngs, {
			color: strokeColor,
			weight: 5,
			opacity: 0.95,
			lineCap: 'round',
			lineJoin: 'round'
		}).addTo(polylineLayer);

		// Marcador de Início (Verde)
		const startPoint = routePoints[0];
		const startIcon = L.divIcon({
			className: 'custom-start-marker',
			html: `<div style="background-color: #10b981; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 12px #10b981;"></div>`,
			iconSize: [16, 16],
			iconAnchor: [8, 8]
		});

		L.marker([startPoint.latitude, startPoint.longitude], { icon: startIcon })
			.bindPopup(`<b>${$t.routeMap.popupStart}</b><br>BPM: ${startPoint.heartRateBpm}<br>${$t.routeMap.popupSpeed} ${startPoint.instantSpeedKmh} km/h`)
			.addTo(markersLayer);

		// Marcador de Fim
		const endPoint = routePoints[routePoints.length - 1];
		const endIcon = L.divIcon({
			className: 'custom-end-marker',
			html: `<div style="background-color: ${strokeColor}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 12px ${strokeColor};"></div>`,
			iconSize: [16, 16],
			iconAnchor: [8, 8]
		});

		L.marker([endPoint.latitude, endPoint.longitude], { icon: endIcon })
			.bindPopup(`<b>${$t.routeMap.popupEnd}</b><br>BPM: ${endPoint.heartRateBpm}<br>${$t.routeMap.popupSpeed} ${endPoint.instantSpeedKmh} km/h`)
			.addTo(markersLayer);

		mapInstance.fitBounds(polyline.getBounds(), { padding: [35, 35] });
	}

	onMount(() => {
		initMap();
	});

	onDestroy(() => {
		if (mapInstance) {
			mapInstance.remove();
		}
	});
</script>

<div class="cyber-card rounded-2xl p-4 shadow-xl flex flex-col h-[480px]">
	<!-- Map Header -->
	<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-purple-500/15">
		<div class="flex items-center gap-2">
			{#if activityType?.toLowerCase() === 'musculação'}
				<Dumbbell class="w-4 h-4 text-amber-400" />
			{:else}
				<Navigation class="w-4 h-4 text-cyber-cyan" />
			{/if}
			<h3 class="text-sm font-bold text-white tracking-wide truncate max-w-[240px] sm:max-w-xs">
				{activityTitle}
			</h3>
		</div>

		<!-- Layer Selector: Satélite Google / Terreno / Ruas -->
		<div class="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-purple-500/20 text-xs font-mono">
			<button
				type="button"
				on:click={() => switchLayer('satellite')}
				class="flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'satellite' ? 'bg-gradient-to-r from-nubank-600 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(130,10,209,0.4)]' : 'text-slate-400 hover:text-white'}"
				title={$t.routeMap.satelliteTitle}
			>
				<Satellite class="w-3.5 h-3.5" />
				<span class="hidden sm:inline">{$t.routeMap.satellite}</span>
			</button>

			<button
				type="button"
				on:click={() => switchLayer('terrain')}
				class="flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'terrain' ? 'bg-gradient-to-r from-nubank-600 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(130,10,209,0.4)]' : 'text-slate-400 hover:text-white'}"
				title={$t.routeMap.terrainTitle}
			>
				<Mountain class="w-3.5 h-3.5" />
				<span class="hidden sm:inline">{$t.routeMap.terrain}</span>
			</button>

			<button
				type="button"
				on:click={() => switchLayer('streets')}
				class="flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'streets' ? 'bg-gradient-to-r from-nubank-600 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(130,10,209,0.4)]' : 'text-slate-400 hover:text-white'}"
				title={$t.routeMap.streetsTitle}
			>
				<MapIcon class="w-3.5 h-3.5" />
				<span class="hidden sm:inline">{$t.routeMap.streets}</span>
			</button>
		</div>
	</div>

	<!-- Map Canvas -->
	<div class="flex-1 relative rounded-xl overflow-hidden border border-purple-500/20">
		<div bind:this={mapContainer} class="w-full h-full z-10"></div>

		<!-- Overlay Real: Quando o dispositivo não possui dados de satélite/GPS -->
		{#if !hasGpsData}
			<div class="absolute inset-0 z-20 flex items-center justify-center p-6 bg-slate-950/75 backdrop-blur-[2px]">
				<div class="max-w-md w-full p-5 rounded-2xl bg-slate-900/95 border border-purple-500/30 shadow-2xl text-center space-y-3">
					<div class="w-12 h-12 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center justify-center mx-auto shadow-[0_0_12px_rgba(130,10,209,0.3)]">
						{#if activityType?.toLowerCase() === 'musculação'}
							<Dumbbell class="w-6 h-6 text-amber-400" />
						{:else}
							<MapPin class="w-6 h-6 text-purple-400" />
						{/if}
					</div>

					<div>
						<h4 class="text-sm font-bold text-white">{$t.routeMap.noGpsTitle}</h4>
						<p class="text-xs text-purple-200/70 mt-1 leading-relaxed">
							{interpolate($t.routeMap.noGpsDesc, { title: activityTitle })}
						</p>
					</div>

					<div class="pt-1 flex items-center justify-center gap-2 text-[11px] font-mono text-cyber-emerald">
						<span class="w-2 h-2 rounded-full bg-cyber-emerald shadow-[0_0_8px_#00ffa3]"></span>
						<span>{$t.routeMap.bioTelemetryValid}</span>
					</div>
				</div>
			</div>
		{:else}
			<!-- Banner Inferior com Coordenadas Reais Obtidas do Dispositivo -->
			<div class="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-slate-950/90 border border-purple-500/30 backdrop-blur-md shadow-2xl flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center justify-center shrink-0">
						<MapPin class="w-4 h-4 text-cyber-cyan" />
					</div>
					<div>
						<div class="text-xs font-bold text-white flex items-center gap-2">
							<span>{$t.routeMap.deviceLocation}</span>
							<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-cyber-emerald border border-emerald-500/30 font-bold">
								{$t.routeMap.realData}
							</span>
						</div>
						<span class="text-[11px] text-purple-200/80 font-mono">
							{interpolate($t.routeMap.coordinates, { lat: routePoints[0].latitude.toFixed(6), lon: routePoints[0].longitude.toFixed(6) })}
							{#if routePoints.length > 1}
								{interpolate($t.routeMap.trackPoints, { count: routePoints.length })}
							{/if}
						</span>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	:global(.leaflet-container) {
		background-color: #0b1120 !important;
		font-family: inherit;
	}
	:global(.leaflet-popup-content-wrapper) {
		background-color: #0f172a !important;
		color: #f8fafc !important;
		border: 1px solid #334155 !important;
		border-radius: 8px !important;
		font-size: 11px !important;
		font-family: monospace;
	}
	:global(.leaflet-popup-tip) {
		background-color: #0f172a !important;
	}
</style>
