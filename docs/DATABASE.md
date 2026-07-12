# Database Design

## Tables

- users
- roles
- departments
- categories
- assets
- asset_history
- allocations
- transfer_requests
- bookings
- maintenance_requests
- audit_cycles
- audit_entries
- notifications
- activity_logs

## Relationships

Department
└── Employees

Department
└── Assets

Asset
├── Allocation
├── Booking
├── Maintenance
├── Audit
└── History

## Database

PostgreSQL

## Design Principles

- Normalized (3NF)
- Foreign Keys
- Indexes
- Constraints