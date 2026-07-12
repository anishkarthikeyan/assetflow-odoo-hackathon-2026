from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..config.database import get_db
from ..services.maintenanceService import MaintenanceService
from ..schemas.maintenance import (
    MaintenanceCreate,
    MaintenanceUpdate,
    MaintenanceResponse,
)

router = APIRouter(prefix="/maintenance", tags=["maintenance"])


@router.get("/", response_model=List[MaintenanceResponse])
def get_maintenance_records(db: Session = Depends(get_db)):
    pass


@router.get("/{record_id}", response_model=MaintenanceResponse)
def get_maintenance_record(record_id: str, db: Session = Depends(get_db)):
    pass


@router.post("/", response_model=MaintenanceResponse)
def create_maintenance_record(
    record: MaintenanceCreate, db: Session = Depends(get_db)
):
    pass


@router.put("/{record_id}", response_model=MaintenanceResponse)
def update_maintenance_record(
    record_id: str, record: MaintenanceUpdate, db: Session = Depends(get_db)
):
    pass


@router.post("/{record_id}/complete")
def complete_maintenance_record(
    record_id: str, notes: str = None, db: Session = Depends(get_db)
):
    pass
