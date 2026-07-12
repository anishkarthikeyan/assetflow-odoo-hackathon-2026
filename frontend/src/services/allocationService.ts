import api from './api';

export interface Allocation {
  id: string;
  assetId: string;
  userId: string;
  startDate: string;
  endDate?: string;
  status: string;
}

export const allocationService = {
  getAll: async (params?: Record<string, any>): Promise<Allocation[]> => {
    const response = await api.get('/allocations', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Allocation> => {
    const response = await api.get(`/allocations/${id}`);
    return response.data;
  },

  create: async (data: Partial<Allocation>): Promise<Allocation> => {
    const response = await api.post('/allocations', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Allocation>): Promise<Allocation> => {
    const response = await api.put(`/allocations/${id}`, data);
    return response.data;
  },

  release: async (id: string): Promise<void> => {
    await api.post(`/allocations/${id}/release`);
  },
};
