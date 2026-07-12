from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.allocation import Allocation


class AllocationRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self, filters: dict = None) -> List[Allocation]:
        pass

    def get_by_id(self, allocation_id: str) -> Optional[Allocation]:
        pass

    def create(self, allocation: Allocation) -> Allocation:
        pass

    def update(self, allocation: Allocation) -> Allocation:
        pass

    def delete(self, allocation_id: str) -> bool:
        pass

    def get_active_by_asset(self, asset_id: str) -> Optional[Allocation]:
        pass

    def get_active_by_user(self, user_id: str) -> List[Allocation]:
        pass
