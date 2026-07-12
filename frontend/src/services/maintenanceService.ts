import api from './api';

export interface MaintenanceRecord {
  id: string;
  assetId: string;
  type: string;
  scheduledDate: string;
  completedDate?: string;
  status: string;
  notes?: string;
}

export const maintenanceService = {
  getAll: async (params?: Record<string, any>): Promise<MaintenanceRecord[]> => {
    const response = await api.get('/maintenance', { params });
    return response.data;
  },

  getById: async (id: string): Promise<MaintenanceRecord> => {
    const response = await api.get(`/maintenance/${id}`);
    return response.data;
  },

  create: async (data: Partial<MaintenanceRecord>): Promise<MaintenanceRecord> => {
    const response = await api.post('/maintenance', data);
    return response.data;
  },

  complete: async (id: string, notes?: string): Promise<void> => {
    await api.post(`/maintenance/${id}/complete`, { notes });
  },
};
