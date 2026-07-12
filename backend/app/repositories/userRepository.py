from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.user import User


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> List[User]:
        pass

    def get_by_id(self, user_id: str) -> Optional[User]:
        pass

    def get_by_email(self, email: str) -> Optional[User]:
        pass

    def create(self, user: User) -> User:
        pass

    def update(self, user: User) -> User:
        pass

    def delete(self, user_id: str) -> bool:
        pass
