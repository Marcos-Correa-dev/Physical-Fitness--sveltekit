<script lang="ts">
	import { onMount } from 'svelte';
	import { Watch, RefreshCw, Zap, ShieldCheck, Bluetooth, Activity } from 'lucide-svelte';

	export let onOpenSimulator: () => void;
	export let onOpenBluetooth: () => void;
	export let onRefresh: () => void;
	export let isRefreshing: boolean = false;
	export let bluetoothConnectedDevice: string | null = null;

	let currentTimeStr = '';
	let currentDateStr = '';
	let currentDayOfWeek = '';

	function updateClock() {
		const now = new Date();
		currentDateStr = now.toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});
		currentDayOfWeek = now.toLocaleDateString('pt-BR', { weekday: 'long' });
		currentTimeStr = now.toLocaleTimeString('pt-BR', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});
	}

	onMount(() => {
		updateClock();
		const interval = setInterval(updateClock, 1000);
		return () => clearInterval(interval);
	});
</script>

<header class="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-30 px-6 py-4">
	<div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
		<!-- Brand & Title -->
		<div class="flex items-center gap-3">
			<div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20">
				<div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
					<Activity class="w-6 h-6 text-emerald-400" />
				</div>
			</div>
			<div>
				<div class="flex items-center gap-2">
					<h1 class="text-xl font-bold tracking-tight text-white font-sans">
						Physical Fitness
					</h1>
					{#if bluetoothConnectedDevice}
						<span class="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400">
							<Bluetooth class="w-3 h-3 text-blue-400" />
							{bluetoothConnectedDevice}
						</span>
					{/if}
				</div>
				<p class="text-xs text-slate-400">
					Monitoramento de Atividades Físicas & Auditoria de Desempenho
				</p>
			</div>
		</div>

		<!-- Dia, Data, Hora Real-time Display -->
		<div class="flex items-center gap-4 bg-slate-950/70 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono">
			<div class="flex items-center gap-2">
				<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
				<span class="capitalize text-slate-300 font-semibold">{currentDayOfWeek}</span>
			</div>
			<div class="w-px h-4 bg-slate-800"></div>
			<div class="text-slate-400">
				{currentDateStr}
			</div>
			<div class="w-px h-4 bg-slate-800"></div>
			<div class="text-cyan-400 font-bold text-sm tracking-wider">
				{currentTimeStr}
			</div>
		</div>

		<!-- Action Controls -->
		<div class="flex items-center gap-2.5">
			<!-- Conectar Bluetooth -->
			<button
				type="button"
				on:click={onOpenBluetooth}
				class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer {bluetoothConnectedDevice ? 'bg-blue-950/60 border-blue-500/60 text-blue-300 shadow-lg shadow-blue-500/20' : 'bg-slate-800/90 border-slate-700 text-slate-200 hover:bg-slate-700'}"
				title="Conectar relógio ou pulseira via Bluetooth"
			>
				<Bluetooth class="w-4 h-4 {bluetoothConnectedDevice ? 'text-blue-400 animate-pulse' : 'text-slate-400'}" />
				<span>{bluetoothConnectedDevice ? 'Bluetooth Ativo' : 'Conectar Bluetooth'}</span>
			</button>

			<!-- Atualizar -->
			<button
				type="button"
				on:click={onRefresh}
				disabled={isRefreshing}
				class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
				title="Atualizar dados"
			>
				<RefreshCw class="w-3.5 h-3.5 {isRefreshing ? 'animate-spin text-cyan-400' : ''}" />
				<span class="hidden sm:inline">Atualizar</span>
			</button>

			<!-- Transmitir do Relógio -->
			<button
				type="button"
				on:click={onOpenSimulator}
				class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-lg shadow-lg shadow-cyan-600/20 transition-all cursor-pointer"
			>
				<Watch class="w-4 h-4 text-white" />
				<span>Sincronizar Relógio</span>
				<Zap class="w-3 h-3 text-cyan-200" />
			</button>
		</div>
	</div>
</header>
