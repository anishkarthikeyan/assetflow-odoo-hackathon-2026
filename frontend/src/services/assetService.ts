import api from './api';

export interface Asset {
  id: string;
  name: string;
  category: string;
  status: string;
  location?: string;
  purchaseDate?: string;
  value?: number;
}

export const assetService = {
  getAll: async (params?: Record<string, any>): Promise<Asset[]> => {
    const response = await api.get('/assets', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Asset> => {
    const response = await api.get(`/assets/${id}`);
    return response.data;
  },

  create: async (data: Partial<Asset>): Promise<Asset> => {
    const response = await api.post('/assets', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Asset>): Promise<Asset> => {
    const response = await api.put(`/assets/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/assets/${id}`);
  },
};
