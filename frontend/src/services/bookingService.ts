import api from './api';

export interface Booking {
  id: string;
  assetId: string;
  userId: string;
  startTime: string;
  endTime: string;
  status: string;
}

export const bookingService = {
  getAll: async (params?: Record<string, any>): Promise<Booking[]> => {
    const response = await api.get('/bookings', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Booking> => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  create: async (data: Partial<Booking>): Promise<Booking> => {
    const response = await api.post('/bookings', data);
    return response.data;
  },

  cancel: async (id: string): Promise<void> => {
    await api.post(`/bookings/${id}/cancel`);
  },
};
