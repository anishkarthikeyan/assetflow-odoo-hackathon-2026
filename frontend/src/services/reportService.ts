import api from './api';

export interface Report {
  id: string;
  type: string;
  title: string;
  generatedAt: string;
  data: any;
}

export const reportService = {
  getAssetReport: async (params?: Record<string, any>): Promise<Report> => {
    const response = await api.get('/reports/assets', { params });
    return response.data;
  },

  getAllocationReport: async (params?: Record<string, any>): Promise<Report> => {
    const response = await api.get('/reports/allocations', { params });
    return response.data;
  },

  getMaintenanceReport: async (params?: Record<string, any>): Promise<Report> => {
    const response = await api.get('/reports/maintenance', { params });
    return response.data;
  },

  exportReport: async (type: string, format: 'pdf' | 'csv'): Promise<Blob> => {
    const response = await api.get(`/reports/${type}/export`, {
      params: { format },
      responseType: 'blob',
    });
    return response.data;
  },
};
