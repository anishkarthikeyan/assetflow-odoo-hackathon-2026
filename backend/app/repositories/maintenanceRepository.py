from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.maintenance import MaintenanceRecord


class MaintenanceRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self, filters: dict = None) -> List[MaintenanceRecord]:
        pass

    def get_by_id(self, record_id: str) -> Optional[MaintenanceRecord]:
        pass

    def create(self, record: MaintenanceRecord) -> MaintenanceRecord:
        pass

    def update(self, record: MaintenanceRecord) -> MaintenanceRecord:
        pass

    def delete(self, record_id: str) -> bool:
        pass

    def get_scheduled(self) -> List[MaintenanceRecord]:
        pass

    def get_by_asset(self, asset_id: str) -> List[MaintenanceRecord]:
        pass
