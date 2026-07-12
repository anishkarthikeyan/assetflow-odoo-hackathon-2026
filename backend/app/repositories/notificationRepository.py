from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.notification import Notification


class NotificationRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_user(
        self, user_id: str, unread_only: bool = False
    ) -> List[Notification]:
        pass

    def get_unread_count(self, user_id: str) -> int:
        pass

    def create(self, notification: Notification) -> Notification:
        pass

    def update(self, notification: Notification) -> Notification:
        pass

    def mark_all_as_read(self, user_id: str) -> bool:
        pass
