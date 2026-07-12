from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.asset import Asset


class AssetRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self, filters: dict = None) -> List[Asset]:
        pass

    def get_by_id(self, asset_id: str) -> Optional[Asset]:
        pass

    def create(self, asset: Asset) -> Asset:
        pass

    def update(self, asset: Asset) -> Asset:
        pass

    def delete(self, asset_id: str) -> bool:
        pass

    def get_by_status(self, status: str) -> List[Asset]:
        pass

    def get_by_category(self, category: str) -> List[Asset]:
        pass
