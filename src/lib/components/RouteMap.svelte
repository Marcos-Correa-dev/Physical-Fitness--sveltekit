<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { TelemetryPoint } from '../types/activity';
	import { Navigation, Compass, Layers, MapPin, Dumbbell, Mountain, Satellite, Map as MapIcon } from 'lucide-svelte';

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
		// Google Maps Satélite Real com Estradas/Rótulos Híbrido
		satellite: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
		// Google Maps Terreno Físico com Sombreamento de Relevo e Curvas de Nível
		terrain: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
		// Google Maps Ruas / Urbano
		streets: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
	};

	$: if (browser && mapInstance && (routePoints || activeLayerType)) {
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

		// Centro padrão no Ibirapuera / SP
		const defaultLat = routePoints.length > 0 ? routePoints[0].latitude : -23.5874;
		const defaultLon = routePoints.length > 0 ? routePoints[0].longitude : -46.6576;

		mapInstance = L.map(mapContainer, {
			attributionControl: false,
			zoomControl: true
		}).setView([defaultLat, defaultLon], 15);

		// Inicializa com camada de Satélite Real do Google Maps
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

		// Caso de Musculação: treino indoor na academia
		if (activityType?.toLowerCase() === 'musculação' || routePoints.length <= 1) {
			const lat = routePoints.length > 0 ? routePoints[0].latitude : -23.5615;
			const lon = routePoints.length > 0 ? routePoints[0].longitude : -46.6559;

			const gymIcon = L.divIcon({
				className: 'gym-marker',
				html: `<div style="background-color: #f59e0b; width: 36px; height: 36px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 16px rgba(245, 158, 11, 0.7); color: black; font-weight: bold; font-size: 16px;">🏋️</div>`,
				iconSize: [36, 36],
				iconAnchor: [18, 18]
			});

			L.marker([lat, lon], { icon: gymIcon })
				.bindPopup(`<b>Academia / Centro de Treinamento</b><br>Atividade: Musculação<br>Deslocamento: 0.0 km (Indoor)`)
				.addTo(markersLayer);

			mapInstance.setView([lat, lon], 17);
			return;
		}

		if (routePoints.length < 2) return;

		const latLngs = routePoints.map((p) => [p.latitude, p.longitude] as [number, number]);

		const strokeColor =
			status?.toLowerCase() === 'valid'
				? '#10b981' // emerald
				: status?.toLowerCase() === 'suspect'
				? '#f59e0b' // amber
				: '#ef4444'; // rose

		// Polilinha de alta visibilidade sobre o satélite real
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
			.bindPopup(`<b>Ponto Inicial</b><br>BPM: ${startPoint.heartRateBpm}<br>Velocidade: ${startPoint.instantSpeedKmh} km/h`)
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
			.bindPopup(`<b>Ponto Final</b><br>BPM: ${endPoint.heartRateBpm}<br>Velocidade: ${endPoint.instantSpeedKmh} km/h`)
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

<div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 shadow-xl flex flex-col h-[480px]">
	<!-- Map Header with Google Map Layer Switcher -->
	<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-slate-800/80">
		<div class="flex items-center gap-2">
			{#if activityType?.toLowerCase() === 'musculação'}
				<Dumbbell class="w-4 h-4 text-amber-400" />
			{:else}
				<Navigation class="w-4 h-4 text-cyan-400" />
			{/if}
			<h3 class="text-sm font-semibold text-white truncate max-w-[240px] sm:max-w-xs">
				{activityTitle}
			</h3>
		</div>

		<!-- Layer Selector: Satélite Real Google / Terreno / Ruas -->
		<div class="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
			<button
				type="button"
				on:click={() => switchLayer('satellite')}
				class="flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'satellite' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}"
				title="Google Maps Satélite com Estradas"
			>
				<Satellite class="w-3.5 h-3.5" />
				<span class="hidden sm:inline">Google Satélite</span>
			</button>

			<button
				type="button"
				on:click={() => switchLayer('terrain')}
				class="flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'terrain' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}"
				title="Google Maps Terreno com Relevo e Curvas"
			>
				<Mountain class="w-3.5 h-3.5" />
				<span class="hidden sm:inline">Google Terreno</span>
			</button>

			<button
				type="button"
				on:click={() => switchLayer('streets')}
				class="flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer {activeLayerType === 'streets' ? 'bg-cyan-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}"
				title="Mapa Urbano"
			>
				<MapIcon class="w-3.5 h-3.5" />
				<span class="hidden sm:inline">Ruas</span>
			</button>
		</div>
	</div>

	<!-- Map Canvas -->
	<div class="flex-1 relative rounded-xl overflow-hidden border border-slate-800/60">
		<div bind:this={mapContainer} class="w-full h-full z-10"></div>

		<!-- Musculação Overlay Banner -->
		{#if activityType?.toLowerCase() === 'musculação'}
			<div class="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-slate-950/90 border border-amber-500/40 backdrop-blur-md shadow-2xl flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
						<Dumbbell class="w-5 h-5" />
					</div>
					<div>
						<div class="text-xs font-bold text-white flex items-center gap-2">
							<span>Sessão Indoor de Musculação</span>
							<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">0.0 KM VÁLIDO</span>
						</div>
						<span class="text-[11px] text-slate-400 font-mono">
							Localização em Academia • Monitoramento de séries com biometria contínua
						</span>
					</div>
				</div>

				<div class="hidden sm:flex items-center gap-3 text-right font-mono text-xs">
					<div>
						<span class="text-[10px] text-slate-400 block uppercase">Demanda</span>
						<span class="text-amber-400 font-bold">Hipertrofia</span>
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
