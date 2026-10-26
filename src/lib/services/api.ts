import type { DashboardMetrics, ActivitySummary, SimulationRequest } from '../types/activity';

const API_BASE_URL = 'http://localhost:5005/api/v1';

export async function fetchDashboardMetrics(): Promise<DashboardMetrics> {
	const res = await fetch(`${API_BASE_URL}/dashboard`);
	if (!res.ok) {
		throw new Error(`Erro ao buscar dados do dashboard: ${res.statusText}`);
	}
	return await res.json();
}

export async function fetchActivityDetails(id: string): Promise<ActivitySummary> {
	const res = await fetch(`${API_BASE_URL}/activities/${id}`);
	if (!res.ok) {
		throw new Error(`Erro ao buscar detalhes da atividade: ${res.statusText}`);
	}
	return await res.json();
}

export async function revalidateActivity(id: string): Promise<ActivitySummary> {
	const res = await fetch(`${API_BASE_URL}/activities/${id}/validate`, {
		method: 'POST'
	});
	if (!res.ok) {
		throw new Error(`Erro ao revalidar atividade: ${res.statusText}`);
	}
	return await res.json();
}

export async function simulateWorkoutSync(request: SimulationRequest): Promise<ActivitySummary> {
	const res = await fetch(`${API_BASE_URL}/devices/simulate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(request)
	});
	if (!res.ok) {
		throw new Error(`Erro ao sincronizar relógio eletrônico: ${res.statusText}`);
	}
	return await res.json();
}
