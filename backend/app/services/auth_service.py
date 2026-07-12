from sqlalchemy.orm import Session


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def signup(self):
        pass

    def login(self):
        pass

    def get_profile(self):
        pass
