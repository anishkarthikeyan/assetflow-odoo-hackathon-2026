export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organizationId?: string;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'admin' | 'manager' | 'user' | 'viewer';

export interface Organization {
  id: string;
  name: string;
  parentId?: string;
  type: OrganizationType;
  createdAt: string;
  updatedAt: string;
}

export type OrganizationType = 'company' | 'department' | 'team' | 'unit';

export interface Asset {
  id: string;
  name: string;
  description?: string;
  category: AssetCategory;
  status: AssetStatus;
  location?: string;
  organizationId: string;
  purchaseDate?: string;
  purchaseValue?: number;
  currentValue?: number;
  serialNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export type AssetCategory =
  | 'equipment'
  | 'vehicle'
  | 'furniture'
  | 'technology'
  | 'building'
  | 'other';

export type AssetStatus =
  | 'available'
  | 'allocated'
  | 'maintenance'
  | 'retired'
  | 'lost';

export interface Allocation {
  id: string;
  assetId: string;
  userId: string;
  startDate: string;
  endDate?: string;
  status: AllocationStatus;
  purpose?: string;
  createdAt: string;
  updatedAt: string;
}

export type AllocationStatus = 'active' | 'pending' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  assetId: string;
  userId: string;
  startTime: string;
  endTime: string;
  status: BookingStatus;
  purpose?: string;
  createdAt: string;
  updatedAt: string;
}

export type BookingStatus = 'confirmed' | 'pending' | 'cancelled' | 'completed';

export interface MaintenanceRecord {
  id: string;
  assetId: string;
  type: MaintenanceType;
  scheduledDate: string;
  completedDate?: string;
  status: MaintenanceStatus;
  notes?: string;
  cost?: number;
  performedBy?: string;
  createdAt: string;
  updatedAt: string;
}

export type MaintenanceType = 'preventive' | 'corrective' | 'predictive' | 'emergency';

export type MaintenanceStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export interface AuditEntry {
  id: string;
  action: AuditAction;
  entityType: string;
  entityId: string;
  userId: string;
  timestamp: string;
  changes?: Record<string, { old: any; new: any }>;
  ipAddress?: string;
}

export type AuditAction = 'create' | 'update' | 'delete' | 'view' | 'export';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  entityType?: string;
  entityId?: string;
  createdAt: string;
}

export type NotificationType =
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'reminder';

export interface Report {
  id: string;
  type: ReportType;
  title: string;
  generatedBy: string;
  generatedAt: string;
  parameters?: Record<string, any>;
  data: any;
}

export type ReportType =
  | 'asset_summary'
  | 'allocation_summary'
  | 'maintenance_summary'
  | 'audit_log'
  | 'utilization';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, any>;
}
