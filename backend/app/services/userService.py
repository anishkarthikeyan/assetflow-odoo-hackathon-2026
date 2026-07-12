from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.user import User
from ..repositories.userRepository import UserRepository


class UserService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = UserRepository(db)

    def get_all(self) -> List[User]:
        pass

    def get_by_id(self, user_id: str) -> Optional[User]:
        pass

    def get_by_email(self, email: str) -> Optional[User]:
        pass

    def create(self, user_data: dict) -> User:
        pass

    def update(self, user_id: str, user_data: dict) -> Optional[User]:
        pass

    def delete(self, user_id: str) -> bool:
        pass
