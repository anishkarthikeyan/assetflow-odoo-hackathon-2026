from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.booking import Booking
from ..repositories.bookingRepository import BookingRepository


class BookingService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = BookingRepository(db)

    def get_all(self, filters: dict = None) -> List[Booking]:
        pass

    def get_by_id(self, booking_id: str) -> Optional[Booking]:
        pass

    def create(self, booking_data: dict) -> Booking:
        pass

    def cancel(self, booking_id: str) -> bool:
        pass

    def get_conflicting_bookings(
        self, asset_id: str, start_time: str, end_time: str
    ) -> List[Booking]:
        pass
