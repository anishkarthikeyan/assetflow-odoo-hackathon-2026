from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..config.database import get_db
from ..controllers.auth_controller import AuthController

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/signup")
def signup(db: Session = Depends(get_db)):
    controller = AuthController(db)
    return controller.signup()


@router.post("/login")
def login(db: Session = Depends(get_db)):
    controller = AuthController(db)
    return controller.login()


@router.get("/profile")
def get_profile(db: Session = Depends(get_db)):
    controller = AuthController(db)
    return controller.get_profile()
