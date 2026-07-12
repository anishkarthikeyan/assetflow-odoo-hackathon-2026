from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.audit import AuditEntry
from ..repositories.auditRepository import AuditRepository


class AuditService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = AuditRepository(db)

    def get_all(
        self, entity_type: str = None, entity_id: str = None
    ) -> List[AuditEntry]:
        pass

    def get_by_entity(self, entity_type: str, entity_id: str) -> List[AuditEntry]:
        pass

    def create(self, entry_data: dict) -> AuditEntry:
        pass

    def log_action(
        self,
        action: str,
        entity_type: str,
        entity_id: str,
        user_id: str,
        changes: dict = None,
    ) -> AuditEntry:
        pass
