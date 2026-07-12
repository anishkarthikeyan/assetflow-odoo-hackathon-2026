from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.notification import Notification
from ..repositories.notificationRepository import NotificationRepository


class NotificationService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = NotificationRepository(db)

    def get_by_user(self, user_id: str, unread_only: bool = False) -> List[Notification]:
        pass

    def get_unread_count(self, user_id: str) -> int:
        pass

    def create(self, notification_data: dict) -> Notification:
        pass

    def mark_as_read(self, notification_id: str) -> bool:
        pass

    def mark_all_as_read(self, user_id: str) -> bool:
        pass

    def send_notification(
        self, user_id: str, title: str, message: str, notification_type: str = "info"
    ) -> Notification:
        pass
