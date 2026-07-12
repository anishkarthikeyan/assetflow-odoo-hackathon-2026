from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.booking import Booking


class BookingRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self, filters: dict = None) -> List[Booking]:
        pass

    def get_by_id(self, booking_id: str) -> Optional[Booking]:
        pass

    def create(self, booking: Booking) -> Booking:
        pass

    def update(self, booking: Booking) -> Booking:
        pass

    def delete(self, booking_id: str) -> bool:
        pass

    def get_conflicting(
        self, asset_id: str, start_time: str, end_time: str
    ) -> List[Booking]:
        pass
