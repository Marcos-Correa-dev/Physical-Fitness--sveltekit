<script lang="ts">
	export let status: 'Pending' | 'Valid' | 'Suspect' | 'Rejected' | string;
	export let size: 'sm' | 'md' = 'sm';

	$: config = getStatusConfig(status);

	function getStatusConfig(s: string) {
		switch (s?.toLowerCase()) {
			case 'valid':
				return {
					bg: 'bg-emerald-500/15',
					border: 'border-emerald-500/30',
					text: 'text-emerald-400',
					dot: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
					label: 'KM VÁLIDO'
				};
			case 'suspect':
				return {
					bg: 'bg-amber-500/15',
					border: 'border-amber-500/30',
					text: 'text-amber-400',
					dot: 'bg-amber-400 shadow-[0_0_8px_#fbbf24]',
					label: 'SUSPEITO'
				};
			case 'rejected':
				return {
					bg: 'bg-rose-500/15',
					border: 'border-rose-500/30',
					text: 'text-rose-400',
					dot: 'bg-rose-400 shadow-[0_0_8px_#f87171]',
					label: 'REJEITADO'
				};
			default:
				return {
					bg: 'bg-slate-500/15',
					border: 'border-slate-500/30',
					text: 'text-slate-400',
					dot: 'bg-slate-400',
					label: 'PENDENTE'
				};
		}
	}
</script>

<div
	class="inline-flex items-center gap-1.5 font-mono font-semibold uppercase tracking-wider rounded-full border transition-all {config.bg} {config.border} {config.text} {size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-sm'}"
>
	<span class="w-2 h-2 rounded-full {config.dot}"></span>
	<span>{config.label}</span>
</div>
