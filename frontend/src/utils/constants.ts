export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const ROUTES = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/',
  ORGANIZATION: '/organization',
  ASSETS: '/assets',
  ALLOCATION: '/allocation',
  BOOKING: '/booking',
  MAINTENANCE: '/maintenance',
  AUDIT: '/audit',
  REPORTS: '/reports',
  NOTIFICATIONS: '/notifications',
} as const;

export const STORAGE_KEYS = {
  TOKEN: 'token',
  THEME: 'theme',
  USER_PREFERENCES: 'user_preferences',
} as const;

export const ASSET_STATUSES = [
  'available',
  'allocated',
  'maintenance',
  'retired',
  'lost',
] as const;

export const ALLOCATION_STATUSES = [
  'active',
  'pending',
  'completed',
  'cancelled',
] as const;

export const BOOKING_STATUSES = [
  'confirmed',
  'pending',
  'cancelled',
  'completed',
] as const;

export const MAINTENANCE_TYPES = [
  'preventive',
  'corrective',
  'predictive',
  'emergency',
] as const;

export const USER_ROLES = ['admin', 'manager', 'user', 'viewer'] as const;

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
