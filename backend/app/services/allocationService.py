from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.allocation import Allocation
from ..repositories.allocationRepository import AllocationRepository


class AllocationService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = AllocationRepository(db)

    def get_all(self, filters: dict = None) -> List[Allocation]:
        pass

    def get_by_id(self, allocation_id: str) -> Optional[Allocation]:
        pass

    def create(self, allocation_data: dict) -> Allocation:
        pass

    def update(self, allocation_id: str, allocation_data: dict) -> Optional[Allocation]:
        pass

    def release(self, allocation_id: str) -> bool:
        pass

    def get_active_by_asset(self, asset_id: str) -> Optional[Allocation]:
        pass

    def get_active_by_user(self, user_id: str) -> List[Allocation]:
        pass
