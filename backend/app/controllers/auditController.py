from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..config.database import get_db
from ..services.auditService import AuditService
from ..schemas.audit import AuditEntryResponse

router = APIRouter(prefix="/audit", tags=["audit"])


@router.get("/", response_model=List[AuditEntryResponse])
def get_audit_entries(
    entity_type: str = None,
    entity_id: str = None,
    db: Session = Depends(get_db),
):
    pass


@router.get("/{entity_type}/{entity_id}", response_model=List[AuditEntryResponse])
def get_entity_audit_history(
    entity_type: str, entity_id: str, db: Session = Depends(get_db)
):
    pass
