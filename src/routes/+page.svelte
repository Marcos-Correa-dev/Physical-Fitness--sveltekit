<script lang="ts">
	import { onMount } from 'svelte';
	import type { DashboardMetrics, ActivitySummary, SimulationRequest } from '$lib/types/activity';
	import {
		fetchDashboardMetrics,
		fetchActivityDetails,
		revalidateActivity,
		simulateWorkoutSync
	} from '$lib/services/api';
	import DashboardHeader from '$lib/components/DashboardHeader.svelte';
	import MetricCard from '$lib/components/MetricCard.svelte';
	import RouteMap from '$lib/components/RouteMap.svelte';
	import ValidationBadge from '$lib/components/ValidationBadge.svelte';
	import ActivityAuditModal from '$lib/components/ActivityAuditModal.svelte';
	import SmartwatchSimulatorModal from '$lib/components/SmartwatchSimulatorModal.svelte';
	import BluetoothConnectModal from '$lib/components/BluetoothConnectModal.svelte';
	import {
		Activity,
		Flame,
		Heart,
		Compass,
		Route,
		ShieldCheck,
		Watch,
		Clock,
		Calendar,
		Eye,
		RotateCw,
		CheckCircle,
		AlertCircle,
		XCircle,
		Layers,
		Dumbbell,
		Bluetooth
	} from 'lucide-svelte';

	let metrics: DashboardMetrics | null = null;
	let selectedActivity: ActivitySummary | null = null;
	let auditModalActivity: ActivitySummary | null = null;
	let isSimulatorOpen = false;
	let isBluetoothOpen = false;
	let connectedBluetoothDevice: string | null = null;
	let isLoading = true;
	let isRefreshing = false;
	let errorMessage = '';

	async function loadData() {
		try {
			errorMessage = '';
			metrics = await fetchDashboardMetrics();
			if (metrics.recentActivities.length > 0 && !selectedActivity) {
				selectedActivity = metrics.recentActivities[0];
			} else if (selectedActivity && metrics.recentActivities.length > 0) {
				const updated = metrics.recentActivities.find((a) => a.id === selectedActivity?.id);
				if (updated) selectedActivity = updated;
			}
		} catch (err: any) {
			console.error(err);
			errorMessage = 'Não foi possível carregar as métricas do servidor .NET. Verifique se o backend está em execução na porta 5005.';
		} finally {
			isLoading = false;
			isRefreshing = false;
		}
	}

	async function handleRefresh() {
		isRefreshing = true;
		await loadData();
	}

	function handleSelectActivity(act: ActivitySummary) {
		selectedActivity = act;
	}

	function handleOpenAudit(act: ActivitySummary) {
		auditModalActivity = act;
	}

	async function handleRevalidate(id: string) {
		const updated = await revalidateActivity(id);
		auditModalActivity = updated;
		if (selectedActivity?.id === id) {
			selectedActivity = updated;
		}
		await loadData();
	}

	async function handleSimulate(req: SimulationRequest) {
		const newActivity = await simulateWorkoutSync(req);
		selectedActivity = newActivity;
		await loadData();
	}

	onMount(() => {
		loadData();
		// Polling suave a cada 20 segundos
		const interval = setInterval(loadData, 20000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Physical Fitness • Monitoramento e Auditoria de Atividades</title>
</svelte:head>

<!-- Header -->
<DashboardHeader
	onOpenSimulator={() => (isSimulatorOpen = true)}
	onOpenBluetooth={() => (isBluetoothOpen = true)}
	onRefresh={handleRefresh}
	{isRefreshing}
	bluetoothConnectedDevice={connectedBluetoothDevice}
/>

<main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
	<!-- Error Banner if Backend is down -->
	{#if errorMessage}
		<div class="p-4 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-sm flex items-center justify-between">
			<div class="flex items-center gap-3">
				<AlertCircle class="w-5 h-5 text-rose-400 shrink-0" />
				<span>{errorMessage}</span>
			</div>
			<button
				on:click={loadData}
				class="px-3 py-1 bg-rose-900/60 hover:bg-rose-800 rounded-lg text-xs font-mono font-medium"
			>
				Tentar novamente
			</button>
		</div>
	{/if}

	<!-- Overview KPI Grid -->
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		<!-- KM Circulado / Rodados -->
		<MetricCard
			title="KM Validado / Rodados"
			value="{metrics ? metrics.totalValidatedKm.toFixed(1) : '0.0'} km"
			subtitle="Total reportado: {metrics ? metrics.totalReportedKm.toFixed(1) : '0.0'} km"
			change="{metrics && metrics.totalReportedKm > 0 ? ((metrics.totalValidatedKm / metrics.totalReportedKm) * 100).toFixed(0) : '100'}% íntegro"
			accent="emerald"
		>
			<Route slot="icon" class="w-5 h-5 text-emerald-400" />
		</MetricCard>

		<!-- Calorias Gastas -->
		<MetricCard
			title="Calorias Queimadas"
			value="{metrics ? metrics.totalCaloriesBurned.toLocaleString('pt-BR') : '0'} kcal"
			subtitle="Média por treino: {metrics && metrics.totalActivitiesCount > 0 ? Math.round(metrics.totalCaloriesBurned / metrics.totalActivitiesCount) : 0} kcal"
			change="Gasto Ativo"
			accent="amber"
		>
			<Flame slot="icon" class="w-5 h-5 text-amber-400" />
		</MetricCard>

		<!-- Frequência Cardíaca Média -->
		<MetricCard
			title="Batimentos Cardíacos"
			value="{metrics ? metrics.overallAvgHeartRate : 0} bpm"
			subtitle="Monitoramento Wearable"
			change="Zona Aeróbica"
			accent="rose"
		>
			<Heart slot="icon" class="w-5 h-5 text-rose-400" />
		</MetricCard>

		<!-- Status das Validações -->
		<MetricCard
			title="Auditoria de Atividades"
			value="{metrics ? metrics.validActivitiesCount : 0}/{metrics ? metrics.totalActivitiesCount : 0}"
			subtitle="{metrics ? metrics.suspectActivitiesCount : 0} suspeitas • {metrics ? metrics.rejectedActivitiesCount : 0} rejeitadas"
			change="Análise Ativa"
			accent="cyan"
		>
			<ShieldCheck slot="icon" class="w-5 h-5 text-cyan-400" />
		</MetricCard>
	</section>

	<!-- Main Grid: Interactive Route Map + Selected Activity Insights -->
	<section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
		<!-- Map Viewer (2 columns on large screens) -->
		<div class="lg:col-span-2">
			<RouteMap
				routePoints={selectedActivity?.routePoints ?? []}
				activityTitle={selectedActivity ? `${selectedActivity.title} (${selectedActivity.reportedDistanceKm} km)` : 'Percurso'}
				status={selectedActivity?.status ?? 'Valid'}
				activityType={selectedActivity?.activityType ?? 'Corrida'}
			/>
		</div>

		<!-- Selected Activity Telemetry Card -->
		<div class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
			{#if selectedActivity}
				<div>
					<div class="flex items-center justify-between pb-3 border-b border-slate-800/80">
						<span class="text-xs font-mono uppercase text-slate-400">Detalhamento do Treino</span>
						<ValidationBadge status={selectedActivity.status} size="sm" />
					</div>

					<div class="mt-4">
						<div class="flex items-center gap-2">
							{#if selectedActivity.activityType === 'Musculação'}
								<Dumbbell class="w-5 h-5 text-amber-400" />
							{/if}
							<h3 class="text-lg font-bold text-white">{selectedActivity.title}</h3>
						</div>
						<div class="flex items-center gap-2 mt-1 text-xs text-slate-400 font-mono">
							<Watch class="w-3.5 h-3.5 text-cyan-400" />
							<span>{selectedActivity.deviceName}</span>
							<span class="text-slate-600">•</span>
							<span class="text-slate-300 font-bold">{selectedActivity.activityType}</span>
						</div>
					</div>

					<!-- Date, Time and Day of Week -->
					<div class="mt-4 p-3 bg-slate-950/50 rounded-xl border border-slate-800/80 text-xs font-mono space-y-1.5">
						<div class="flex items-center justify-between">
							<span class="text-slate-400 flex items-center gap-1.5">
								<Calendar class="w-3.5 h-3.5 text-slate-500" /> Dia e Data:
							</span>
							<span class="text-white capitalize">{selectedActivity.dayOfWeek}, {selectedActivity.formattedDate}</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-slate-400 flex items-center gap-1.5">
								<Clock class="w-3.5 h-3.5 text-slate-500" /> Horário & Duração:
							</span>
							<span class="text-cyan-400">{selectedActivity.formattedTime} ({selectedActivity.formattedDuration})</span>
						</div>
					</div>

					<!-- Key Numbers Grid -->
					<div class="grid grid-cols-2 gap-2 mt-4">
						<div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800">
							<span class="text-[10px] font-mono uppercase text-slate-400 block">
								{selectedActivity.activityType === 'Musculação' ? 'Distância (Indoor)' : 'KM Validado'}
							</span>
							<span class="text-base font-bold font-mono text-emerald-400">
								{selectedActivity.validatedDistanceKm} km
							</span>
							<span class="text-[10px] text-slate-500 block">
								{selectedActivity.activityType === 'Musculação' ? 'Estático em Academia' : `de ${selectedActivity.reportedDistanceKm} km`}
							</span>
						</div>

						<div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800">
							<span class="text-[10px] font-mono uppercase text-slate-400 block">Calorias Gastas</span>
							<span class="text-base font-bold font-mono text-amber-400">{selectedActivity.caloriesBurned} kcal</span>
						</div>

						<div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800">
							<span class="text-[10px] font-mono uppercase text-slate-400 block">
								{selectedActivity.activityType === 'Musculação' ? 'Foco Metabólico' : 'Ritmo Médio'}
							</span>
							<span class="text-base font-bold font-mono text-white">
								{selectedActivity.activityType === 'Musculação' ? 'Hipertrofia' : selectedActivity.formattedPace}
							</span>
							<span class="text-[10px] text-slate-500 block">
								{selectedActivity.activityType === 'Musculação' ? 'Demanda Anaeróbica' : `${selectedActivity.averageSpeedKmh} km/h`}
							</span>
						</div>

						<div class="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800">
							<span class="text-[10px] font-mono uppercase text-slate-400 block">Frequência Cardíaca</span>
							<span class="text-base font-bold font-mono text-rose-400">{selectedActivity.averageHeartRateBpm} bpm</span>
							<span class="text-[10px] text-slate-500 block">Pico: {selectedActivity.maxHeartRateBpm} bpm</span>
						</div>
					</div>

					<!-- Validation Engine Summary -->
					<div class="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
						<span class="text-[10px] font-mono uppercase text-slate-400 block mb-1">Parecer da Análise</span>
						<p class="text-slate-300 leading-relaxed font-sans">{selectedActivity.validationSummary}</p>
					</div>
				</div>

				<div class="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2">
					<button
						type="button"
						on:click={() => handleOpenAudit(selectedActivity)}
						class="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-colors cursor-pointer"
					>
						<ShieldCheck class="w-4 h-4 text-cyan-400" />
						<span>Abrir Laudo de Auditoria</span>
					</button>
				</div>
			{:else}
				<div class="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
					<Layers class="w-8 h-8 mb-2" />
					<p class="text-xs">Selecione uma atividade para inspecionar</p>
				</div>
			{/if}
		</div>
	</section>

	<!-- Activities Table Section -->
	<section class="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 shadow-xl">
		<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
			<div>
				<h3 class="text-base font-bold text-white">Histórico de Atividades Físicas</h3>
				<p class="text-xs text-slate-400">Atividades sincronizadas de relógios inteligentes e pulseiras com auditoria de integridade</p>
			</div>

			<div class="flex items-center gap-2 text-xs font-mono text-slate-400">
				<span>Total: <b class="text-white">{metrics?.totalActivitiesCount ?? 0}</b> atividades</span>
			</div>
		</div>

		<!-- Table -->
		<div class="overflow-x-auto mt-4">
			<table class="w-full text-left text-xs font-sans">
				<thead>
					<tr class="border-b border-slate-800/90 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
						<th class="py-3 px-3">Dia / Data / Hora</th>
						<th class="py-3 px-3">Atividade & Dispositivo</th>
						<th class="py-3 px-3 text-right">KM Relógio</th>
						<th class="py-3 px-3 text-right">KM Validado</th>
						<th class="py-3 px-3 text-right">Ritmo / Foco</th>
						<th class="py-3 px-3 text-right">Calorias</th>
						<th class="py-3 px-3 text-center">Batimentos</th>
						<th class="py-3 px-3 text-center">Status</th>
						<th class="py-3 px-3 text-center">Ações</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-800/50">
					{#if metrics && metrics.recentActivities.length > 0}
						{#each metrics.recentActivities as act}
							<tr
								class="hover:bg-slate-800/30 transition-colors cursor-pointer {selectedActivity?.id === act.id ? 'bg-cyan-950/20 border-l-2 border-l-cyan-500' : ''}"
								on:click={() => handleSelectActivity(act)}
							>
								<!-- Dia / Data / Hora -->
								<td class="py-3 px-3 font-mono">
									<div class="font-semibold text-slate-200 capitalize">{act.dayOfWeek}</div>
									<div class="text-[11px] text-slate-400">{act.formattedDate} às {act.formattedTime}</div>
								</td>

								<!-- Atividade & Dispositivo -->
								<td class="py-3 px-3">
									<div class="font-bold text-white flex items-center gap-1.5">
										{#if act.activityType === 'Musculação'}
											<Dumbbell class="w-3.5 h-3.5 text-amber-400" />
										{/if}
										<span>{act.title}</span>
									</div>
									<div class="text-[11px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">
										<Watch class="w-3 h-3 text-cyan-400" />
										<span>{act.deviceName}</span>
										<span class="text-slate-600">•</span>
										<span class="text-slate-500">{act.formattedDuration}</span>
									</div>
								</td>

								<!-- KM Relógio -->
								<td class="py-3 px-3 text-right font-mono font-bold text-slate-200">
									{act.activityType === 'Musculação' ? '0.00 km' : `${act.reportedDistanceKm.toFixed(2)} km`}
								</td>

								<!-- KM Validado -->
								<td class="py-3 px-3 text-right font-mono font-bold {act.status === 'Valid' ? 'text-emerald-400' : act.status === 'Suspect' ? 'text-amber-400' : 'text-rose-400'}">
									{act.activityType === 'Musculação' ? '0.00 km' : `${act.validatedDistanceKm.toFixed(2)} km`}
								</td>

								<!-- Ritmo / Foco -->
								<td class="py-3 px-3 text-right font-mono">
									{#if act.activityType === 'Musculação'}
										<div class="text-amber-300 font-medium">Hipertrofia</div>
										<div class="text-[10px] text-slate-500">Indoor</div>
									{:else}
										<div class="text-slate-200 font-medium">{act.formattedPace}</div>
										<div class="text-[10px] text-slate-500">{act.averageSpeedKmh} km/h</div>
									{/if}
								</td>

								<!-- Calorias -->
								<td class="py-3 px-3 text-right font-mono font-bold text-amber-400">
									{act.caloriesBurned} kcal
								</td>

								<!-- Batimentos -->
								<td class="py-3 px-3 text-center font-mono">
									<div class="inline-flex items-center gap-1 text-slate-200 font-bold">
										<Heart class="w-3 h-3 text-rose-500 shrink-0" />
										<span>{act.averageHeartRateBpm}</span>
									</div>
									<div class="text-[10px] text-slate-500">máx {act.maxHeartRateBpm}</div>
								</td>

								<!-- Status -->
								<td class="py-3 px-3 text-center">
									<ValidationBadge status={act.status} size="sm" />
								</td>

								<!-- Ações -->
								<td class="py-3 px-3 text-center" on:click|stopPropagation>
									<div class="flex items-center justify-center gap-1.5">
										<button
											type="button"
											on:click={() => handleSelectActivity(act)}
											class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
											title="Exibir percurso / localização no mapa"
										>
											<Compass class="w-3.5 h-3.5 text-cyan-400" />
										</button>

										<button
											type="button"
											on:click={() => handleOpenAudit(act)}
											class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
											title="Ver laudo detalhado da atividade"
										>
											<ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
										</button>
									</div>
								</td>
							</tr>
						{/each}
					{:else}
						<tr>
							<td colspan="9" class="py-8 text-center text-slate-500 font-mono">
								Nenhuma atividade registrada ainda. Conecte seu relógio via Bluetooth ou use o botão de Sincronizar.
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
	</section>
</main>

<!-- Modals -->
{#if auditModalActivity}
	<ActivityAuditModal
		activity={auditModalActivity}
		onClose={() => (auditModalActivity = null)}
		onRevalidate={handleRevalidate}
	/>
{/if}

<SmartwatchSimulatorModal
	isOpen={isSimulatorOpen}
	onClose={() => (isSimulatorOpen = false)}
	onSimulate={handleSimulate}
/>

<BluetoothConnectModal
	isOpen={isBluetoothOpen}
	onClose={() => (isBluetoothOpen = false)}
	onDeviceConnected={(name) => (connectedBluetoothDevice = name || null)}
	onProcessWorkout={handleSimulate}
/>
