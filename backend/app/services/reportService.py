from typing import Any, Dict
from sqlalchemy.orm import Session

from ..repositories.reportRepository import ReportRepository


class ReportService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = ReportRepository(db)

    def get_asset_report(self, filters: dict = None) -> Dict[str, Any]:
        pass

    def get_allocation_report(self, filters: dict = None) -> Dict[str, Any]:
        pass

    def get_maintenance_report(self, filters: dict = None) -> Dict[str, Any]:
        pass

    def export_report(self, report_type: str, format: str) -> bytes:
        pass
