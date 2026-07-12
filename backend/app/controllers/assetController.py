from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..config.database import get_db
from ..services.assetService import AssetService
from ..schemas.asset import AssetCreate, AssetUpdate, AssetResponse

router = APIRouter(prefix="/assets", tags=["assets"])


@router.get("/", response_model=List[AssetResponse])
def get_assets(db: Session = Depends(get_db)):
    pass


@router.get("/{asset_id}", response_model=AssetResponse)
def get_asset(asset_id: str, db: Session = Depends(get_db)):
    pass


@router.post("/", response_model=AssetResponse)
def create_asset(asset: AssetCreate, db: Session = Depends(get_db)):
    pass


@router.put("/{asset_id}", response_model=AssetResponse)
def update_asset(asset_id: str, asset: AssetUpdate, db: Session = Depends(get_db)):
    pass


@router.delete("/{asset_id}")
def delete_asset(asset_id: str, db: Session = Depends(get_db)):
    pass
