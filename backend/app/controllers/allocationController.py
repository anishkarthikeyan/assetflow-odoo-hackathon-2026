from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..config.database import get_db
from ..services.allocationService import AllocationService
from ..schemas.allocation import AllocationCreate, AllocationUpdate, AllocationResponse

router = APIRouter(prefix="/allocations", tags=["allocations"])


@router.get("/", response_model=List[AllocationResponse])
def get_allocations(db: Session = Depends(get_db)):
    pass


@router.get("/{allocation_id}", response_model=AllocationResponse)
def get_allocation(allocation_id: str, db: Session = Depends(get_db)):
    pass


@router.post("/", response_model=AllocationResponse)
def create_allocation(allocation: AllocationCreate, db: Session = Depends(get_db)):
    pass


@router.put("/{allocation_id}", response_model=AllocationResponse)
def update_allocation(
    allocation_id: str, allocation: AllocationUpdate, db: Session = Depends(get_db)
):
    pass


@router.post("/{allocation_id}/release")
def release_allocation(allocation_id: str, db: Session = Depends(get_db)):
    pass
