<script lang="ts">
	import {
		Bluetooth,
		X,
		Check,
		Zap,
		BatteryCharging,
		Heart,
		Activity,
		Dumbbell,
		Radio,
		RefreshCw,
		AlertCircle
	} from 'lucide-svelte';
	import type { SimulationRequest } from '../types/activity';

	export let isOpen: boolean = false;
	export let onClose: () => void;
	export let onDeviceConnected: (deviceName: string) => void;
	export let onProcessWorkout: (req: SimulationRequest) => Promise<void>;

	let isScanning = false;
	let connectedDevice: any = null;
	let simulatedHeartRate = 136;
	let hrInterval: any = null;
	let selectedWorkoutType: 'strength' | 'running' = 'strength';
	let isProcessing = false;
	let statusMessage = '';

	const nearbyDevices = [
		{
			id: 'miband10',
			name: 'Xiaomi Mi Band 10',
			type: 'Pulseira Inteligente (BLE 5.3)',
			battery: 89,
			rssi: -54,
			suggestedWorkout: 'Musculação (Treino de Hipertrofia)',
			workoutScenario: 'miband_strength_training'
		},
		{
			id: 'garmin965',
			name: 'Garmin Forerunner 965',
			type: 'Relógio Esportivo GPS (BLE)',
			battery: 74,
			rssi: -62,
			suggestedWorkout: 'Corrida Matinal 5.0 km',
			workoutScenario: 'valid_5k_run'
		},
		{
			id: 'applewatch',
			name: 'Apple Watch Ultra 2',
			type: 'Smartwatch Cellular + BLE',
			battery: 92,
			rssi: -59,
			suggestedWorkout: 'Ciclismo Marginal 21.8 km',
			workoutScenario: 'valid_cycling'
		},
		{
			id: 'polarv3',
			name: 'Polar Vantage V3',
			type: 'Monitor Cardíaco Multiesporte',
			battery: 65,
			rssi: -71,
			suggestedWorkout: 'Treino de Ciclismo',
			workoutScenario: 'valid_cycling'
		}
	];

	async function requestNativeBluetooth() {
		isScanning = true;
		statusMessage = 'Buscando aparelhos Bluetooth próximos...';

		if (typeof navigator !== 'undefined' && 'bluetooth' in navigator) {
			try {
				// Tenta Web Bluetooth API nativa do navegador
				const device = await (navigator as any).bluetooth.requestDevice({
					acceptAllDevices: true,
					optionalServices: ['heart_rate', 'battery_service']
				});

				handleConnect({
					id: device.id,
					name: device.name || 'Dispositivo Bluetooth',
					type: 'Dispositivo Pareado via Web Bluetooth',
					battery: 88,
					rssi: -50,
					suggestedWorkout: 'Musculação (Treino de Hipertrofia)',
					workoutScenario: 'miband_strength_training'
				});
				return;
			} catch (err: any) {
				console.log('Bluetooth cancelado ou sem hardware nativo:', err.message);
			} finally {
				isScanning = false;
			}
		}

		// Fallback amigável caso não haja adaptador nativo
		setTimeout(() => {
			isScanning = false;
			statusMessage = 'Dispositivos detectados na área de alcance:';
		}, 700);
	}

	function handleConnect(device: any) {
		connectedDevice = device;
		onDeviceConnected(device.name);
		statusMessage = `Conectado com sucesso a ${device.name}`;

		// Simula frequência cardíaca contínua vinda do relógio
		if (hrInterval) clearInterval(hrInterval);
		hrInterval = setInterval(() => {
			simulatedHeartRate = 130 + Math.floor(Math.random() * 12);
		}, 2000);
	}

	function handleDisconnect() {
		connectedDevice = null;
		if (hrInterval) clearInterval(hrInterval);
		onDeviceConnected('');
	}

	async function handleProcessSuggestedWorkout() {
		if (!connectedDevice) return;
		isProcessing = true;

		try {
			const scenario =
				selectedWorkoutType === 'strength'
					? 'miband_strength_training'
					: 'miband_run';

			await onProcessWorkout({
				deviceModel: connectedDevice.name,
				scenario: scenario
			});

			onClose();
		} finally {
			isProcessing = false;
		}
	}
</script>

{#if isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in">
		<div class="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
			<!-- Header -->
			<div class="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
				<div class="flex items-center gap-3">
					<div class="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shadow-lg shadow-blue-500/20">
						<Bluetooth class="w-6 h-6 animate-pulse" />
					</div>
					<div>
						<h3 class="text-base font-bold text-white">Conexão Bluetooth Low Energy</h3>
						<p class="text-xs text-slate-400 font-mono">Pareamento de Relógios e Pulseiras Inteligentes</p>
					</div>
				</div>

				<button
					type="button"
					on:click={onClose}
					class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
				>
					<X class="w-5 h-5" />
				</button>
			</div>

			<!-- Body -->
			<div class="p-6 space-y-5 overflow-y-auto max-h-[75vh]">
				{#if !connectedDevice}
					<!-- Scanning section -->
					<div class="text-center py-2">
						<button
							type="button"
							on:click={requestNativeBluetooth}
							disabled={isScanning}
							class="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
						>
							<Bluetooth class="w-4 h-4 {isScanning ? 'animate-spin' : ''}" />
							<span>{isScanning ? 'Buscando Aparelhos no Bluetooth...' : 'Escanear Dispositivos Bluetooth'}</span>
						</button>
						<p class="text-[11px] text-slate-500 mt-2 font-mono">
							Compatível com Xiaomi Mi Band 10, Garmin, Apple Watch, Polar e sensores cardíacos BLE.
						</p>
					</div>

					<!-- Device List -->
					<div>
						<label class="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
							Dispositivos Encontrados (Clique para Parear):
						</label>

						<div class="space-y-2">
							{#each nearbyDevices as dev}
								<button
									type="button"
									on:click={() => handleConnect(dev)}
									class="w-full p-3.5 text-left rounded-xl border border-slate-800/80 bg-slate-950/40 hover:bg-blue-950/20 hover:border-blue-500/50 transition-all flex items-center justify-between group cursor-pointer"
								>
									<div class="flex items-center gap-3">
										<div class="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-950/40 transition-colors">
											<Bluetooth class="w-4 h-4" />
										</div>
										<div>
											<div class="text-xs font-bold text-white flex items-center gap-2">
												<span>{dev.name}</span>
												{#if dev.id === 'miband10'}
													<span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono">
														Destaque
													</span>
												{/if}
											</div>
											<span class="text-[11px] text-slate-400 font-mono block mt-0.5">{dev.type}</span>
										</div>
									</div>

									<div class="text-right text-[11px] font-mono text-slate-400">
										<div class="flex items-center justify-end gap-1 text-emerald-400">
											<BatteryCharging class="w-3.5 h-3.5" />
											<span>{dev.battery}%</span>
										</div>
										<span class="text-slate-500">{dev.rssi} dBm</span>
									</div>
								</button>
							{/each}
						</div>
					</div>
				{:else}
					<!-- Connected State Card -->
					<div class="p-4 rounded-xl bg-blue-950/30 border border-blue-500/40 space-y-4">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400">
									<Bluetooth class="w-5 h-5 animate-pulse" />
								</div>
								<div>
									<h4 class="text-sm font-bold text-white">{connectedDevice.name}</h4>
									<div class="flex items-center gap-2 text-[11px] font-mono text-emerald-400 mt-0.5">
										<span class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
										<span>Conectado e Transmitindo</span>
									</div>
								</div>
							</div>

							<button
								type="button"
								on:click={handleDisconnect}
								class="text-xs font-mono text-slate-400 hover:text-rose-400 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
							>
								Desconectar
							</button>
						</div>

						<!-- Telemetry Stream Banner -->
						<div class="grid grid-cols-2 gap-2 pt-2 border-t border-blue-900/40">
							<div class="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center gap-3">
								<div class="p-2 rounded-lg bg-rose-500/10 text-rose-400">
									<Heart class="w-5 h-5 animate-pulse" />
								</div>
								<div>
									<span class="text-[10px] font-mono uppercase text-slate-400 block">Batimentos Ao Vivo</span>
									<span class="text-base font-bold font-mono text-white">{simulatedHeartRate} bpm</span>
								</div>
							</div>

							<div class="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center gap-3">
								<div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
									<BatteryCharging class="w-5 h-5" />
								</div>
								<div>
									<span class="text-[10px] font-mono uppercase text-slate-400 block">Bateria do Relógio</span>
									<span class="text-base font-bold font-mono text-white">{connectedDevice.battery}%</span>
								</div>
							</div>
						</div>

						<!-- Atividade Sugerida pelo Relógio -->
						<div class="pt-2">
							<span class="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
								Atividade Sugerida pelo {connectedDevice.name}:
							</span>

							<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
								<button
									type="button"
									on:click={() => (selectedWorkoutType = 'strength')}
									class="p-3 text-left rounded-xl border transition-all cursor-pointer {selectedWorkoutType === 'strength' ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500' : 'bg-slate-950/40 border-slate-800 hover:bg-slate-800/40'}"
								>
									<div class="flex items-center gap-2 mb-1">
										<Dumbbell class="w-4 h-4 text-amber-400" />
										<span class="font-bold text-xs text-white">Musculação</span>
									</div>
									<p class="text-[11px] text-slate-400 leading-tight">
										Treino de Hipertrofia (48 min, 0 km, 425 kcal, pico 169 bpm).
									</p>
								</button>

								<button
									type="button"
									on:click={() => (selectedWorkoutType = 'running')}
									class="p-3 text-left rounded-xl border transition-all cursor-pointer {selectedWorkoutType === 'running' ? 'bg-cyan-950/40 border-cyan-500 ring-1 ring-cyan-500' : 'bg-slate-950/40 border-slate-800 hover:bg-slate-800/40'}"
								>
									<div class="flex items-center gap-2 mb-1">
										<Activity class="w-4 h-4 text-cyan-400" />
										<span class="font-bold text-xs text-white">Corrida Conectada</span>
									</div>
									<p class="text-[11px] text-slate-400 leading-tight">
										Treino Outdoor (32 min, 6.1 km, 390 kcal, GPS ativo).
									</p>
								</button>
							</div>
						</div>

						<!-- Action Button -->
						<button
							type="button"
							on:click={handleProcessSuggestedWorkout}
							disabled={isProcessing}
							class="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 hover:from-blue-500 hover:to-emerald-500 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
						>
							{#if isProcessing}
								<RefreshCw class="w-4 h-4 animate-spin" />
								<span>Processando Telemetria do {connectedDevice.name}...</span>
							{:else}
								<Zap class="w-4 h-4 text-amber-300" />
								<span>Importar & Processar Atividade do Relógio</span>
							{/if}
						</button>
					</div>
				{/if}
			</div>

			<!-- Footer -->
			<div class="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 font-mono">
				<div class="flex items-center gap-1.5">
					<Radio class="w-3.5 h-3.5 text-blue-400 animate-pulse" />
					<span>GATT Profile: HR Service (0x180D)</span>
				</div>
				<button
					type="button"
					on:click={onClose}
					class="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
				>
					Fechar
				</button>
			</div>
		</div>
	</div>
{/if}
