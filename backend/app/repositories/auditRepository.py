from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.audit import AuditEntry


class AuditRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(
        self, entity_type: str = None, entity_id: str = None
    ) -> List[AuditEntry]:
        pass

    def get_by_entity(self, entity_type: str, entity_id: str) -> List[AuditEntry]:
        pass

    def create(self, entry: AuditEntry) -> AuditEntry:
        pass
