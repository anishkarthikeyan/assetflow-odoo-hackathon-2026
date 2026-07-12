from sqlalchemy.orm import Session

from ..services.auth_service import AuthService


class AuthController:
    def __init__(self, db: Session):
        self.db = db
        self.service = AuthService(db)

    def signup(self):
        return self.service.signup()

    def login(self):
        return self.service.login()

    def get_profile(self):
        return self.service.get_profile()
