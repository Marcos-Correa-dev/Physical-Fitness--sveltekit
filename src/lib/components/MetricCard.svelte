<script lang="ts">
	export let title: string;
	export let value: string | number;
	export let subtitle: string = '';
	export let change: string = '';
	export let trend: 'neutral' | 'positive' | 'negative' = 'neutral';
	export let accent: 'cyan' | 'emerald' | 'amber' | 'rose' | 'indigo' = 'cyan';

	const accentStyles = {
		cyan: {
			border: 'hover:border-cyan-500/40',
			glow: 'from-cyan-500/10 via-transparent to-transparent',
			badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
		},
		emerald: {
			border: 'hover:border-emerald-500/40',
			glow: 'from-emerald-500/10 via-transparent to-transparent',
			badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
		},
		amber: {
			border: 'hover:border-amber-500/40',
			glow: 'from-amber-500/10 via-transparent to-transparent',
			badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
		},
		rose: {
			border: 'hover:border-rose-500/40',
			glow: 'from-rose-500/10 via-transparent to-transparent',
			badge: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
		},
		indigo: {
			border: 'hover:border-indigo-500/40',
			glow: 'from-indigo-500/10 via-transparent to-transparent',
			badge: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
		}
	};
</script>

<div
	class="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800/90 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 {accentStyles[accent].border}"
>
	<!-- Gradient subtle background glow -->
	<div
		class="absolute inset-0 bg-gradient-to-br {accentStyles[accent].glow} pointer-events-none opacity-40"
	></div>

	<div class="relative z-10 flex flex-col justify-between h-full">
		<div class="flex items-center justify-between mb-3">
			<span class="text-xs font-medium uppercase tracking-wider text-slate-400 font-mono">
				{title}
			</span>
			<slot name="icon" />
		</div>

		<div>
			<div class="text-3xl font-extrabold tracking-tight text-white font-mono">
				{value}
			</div>

			<div class="mt-2 flex items-center justify-between gap-2 text-xs">
				{#if subtitle}
					<span class="text-slate-400 truncate">{subtitle}</span>
				{/if}

				{#if change}
					<span
						class="font-mono font-medium px-2 py-0.5 rounded border {accentStyles[accent].badge}"
					>
						{change}
					</span>
				{/if}
			</div>
		</div>
	</div>
</div>
