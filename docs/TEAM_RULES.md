# TEAM_RULES.md

# AssetFlow – Team Development Rules

This document defines ownership, development workflow, coding standards, and Git practices for the AssetFlow ERP project.

---

# Team Members

## 👩‍💻 Developer 1 – Shamuthrika (Frontend Lead)

### Ownership

- React UI
- Dashboard
- Sidebar Navigation
- Layouts
- Reusable Components
- Forms
- Responsive Design
- Reports UI

### Responsible Folders

frontend/src/pages/

frontend/src/components/

frontend/src/layouts/

frontend/src/routes/

frontend/src/assets/

---

## 👨‍💻 Developer 2 – Anish (Technical Lead & Integration Lead)

### Ownership

- Overall Architecture
- Backend APIs
- Business Logic
- Integration
- Git Workflow
- Code Reviews
- Merge Management
- Workflow Engine
- Final Build
- System Design

### Responsible Folders

backend/app/routes/

backend/app/controllers/

backend/app/services/

backend/app/middleware/

backend/app/utils/

docs/

README.md

### Additional Responsibilities

- Maintain architecture consistency
- Review pull requests / merges
- Resolve merge conflicts
- Ensure `main` branch always builds
- Coordinate between frontend and backend
- Final technical decisions

---

## 👨‍💻 Developer 3 – Abinav (Database & Authentication Lead)

### Ownership

- PostgreSQL
- Database Schema
- SQLAlchemy Models
- Authentication
- JWT
- Password Hashing
- Database Migrations
- Validation

### Responsible Folders

backend/app/models/

backend/app/database/

backend/app/auth/

backend/app/schemas/

database/

---

## 👨‍💻 Developer 4 – Akshay (Backend Operations & QA)

### Ownership

- Maintenance Module
- Booking Module
- Notifications
- Testing
- API Testing
- Bug Fixes
- Performance Optimization

### Responsible Folders

backend/app/notifications/

Testing/

QA

---

# Git Workflow

## Branches

feature/frontend

feature/backend

feature/database

feature/operations

---

## Git Rules

- Every member commits frequently.
- Every member pushes at least once every hour.
- Only Anish reviews and merges stable code into `main`.
- `main` must always remain buildable and runnable.
- Never commit broken code to `main`.

---

# File Ownership Rules

- Respect module ownership.
- Coordinate before modifying another developer's files.
- AI agents should only modify files within the assigned module.

---

# Coding Standards

## Backend

- Thin Controllers
- Business Logic inside Services
- Repository Pattern
- Input Validation
- Proper Exception Handling
- RESTful APIs

## Frontend

- Reusable Components
- Responsive Layout
- Shared UI Library
- API communication only through Services

## Database

- PostgreSQL
- Third Normal Form (3NF)
- Foreign Keys
- Constraints
- Proper Indexing
- No redundant data

---

# AI Usage Rules

Every AI session must:

- Follow the agreed architecture.
- Modify only the assigned module.
- Never redesign the project structure.
- Never modify another developer's module.
- Produce clean, modular, production-ready code.

---

# Integration Checklist (Technical Lead)

Before merging to `main`:

✓ Project builds successfully

✓ Frontend compiles

✓ Backend starts successfully

✓ Database connection works

✓ APIs respond correctly

✓ No merge conflicts

✓ No broken imports

✓ Navigation works

✓ Validation works

✓ Commit message is meaningful

---

# Project Goal

Build a modular, scalable Enterprise Asset & Resource Management System demonstrating:

- Strong Database Design
- Clean REST API Architecture
- Enterprise-grade Modular Design
- Responsive Frontend
- Professional Git Workflow
- Maintainable Code
- Scalable Software Engineering Practices

The objective is to deliver a production-quality ERP module that reflects real-world engineering practices and aligns with Odoo's evaluation criteria.