from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.asset import Asset
from ..repositories.assetRepository import AssetRepository


class AssetService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = AssetRepository(db)

    def get_all(self, filters: dict = None) -> List[Asset]:
        pass

    def get_by_id(self, asset_id: str) -> Optional[Asset]:
        pass

    def create(self, asset_data: dict) -> Asset:
        pass

    def update(self, asset_id: str, asset_data: dict) -> Optional[Asset]:
        pass

    def delete(self, asset_id: str) -> bool:
        pass

    def get_by_status(self, status: str) -> List[Asset]:
        pass

    def get_by_category(self, category: str) -> List[Asset]:
        pass
