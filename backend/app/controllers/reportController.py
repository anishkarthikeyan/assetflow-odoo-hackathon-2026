from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from ..config.database import get_db
from ..services.reportService import ReportService
from ..schemas.report import ReportResponse

router = APIRouter(prefix="/reports", tags=["reports"])


@router.get("/assets", response_model=ReportResponse)
def get_asset_report(db: Session = Depends(get_db)):
    pass


@router.get("/allocations", response_model=ReportResponse)
def get_allocation_report(db: Session = Depends(get_db)):
    pass


@router.get("/maintenance", response_model=ReportResponse)
def get_maintenance_report(db: Session = Depends(get_db)):
    pass


@router.get("/{report_type}/export")
def export_report(report_type: str, format: str = "pdf", db: Session = Depends(get_db)):
    pass
