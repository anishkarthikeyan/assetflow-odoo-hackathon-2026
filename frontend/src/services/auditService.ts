import api from './api';

export interface AuditEntry {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  userId: string;
  timestamp: string;
  changes?: Record<string, any>;
}

export const auditService = {
  getAll: async (params?: Record<string, any>): Promise<AuditEntry[]> => {
    const response = await api.get('/audit', { params });
    return response.data;
  },

  getByEntity: async (entityType: string, entityId: string): Promise<AuditEntry[]> => {
    const response = await api.get(`/audit/${entityType}/${entityId}`);
    return response.data;
  },
};
