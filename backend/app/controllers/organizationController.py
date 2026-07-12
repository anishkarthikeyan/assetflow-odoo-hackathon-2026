from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..config.database import get_db
from ..services.organizationService import OrganizationService
from ..schemas.organization import (
    OrganizationCreate,
    OrganizationUpdate,
    OrganizationResponse,
)

router = APIRouter(prefix="/organizations", tags=["organizations"])


@router.get("/", response_model=List[OrganizationResponse])
def get_organizations(db: Session = Depends(get_db)):
    pass


@router.get("/tree", response_model=List[OrganizationResponse])
def get_organization_tree(db: Session = Depends(get_db)):
    pass


@router.get("/{org_id}", response_model=OrganizationResponse)
def get_organization(org_id: str, db: Session = Depends(get_db)):
    pass


@router.post("/", response_model=OrganizationResponse)
def create_organization(
    organization: OrganizationCreate, db: Session = Depends(get_db)
):
    pass


@router.put("/{org_id}", response_model=OrganizationResponse)
def update_organization(
    org_id: str, organization: OrganizationUpdate, db: Session = Depends(get_db)
):
    pass


@router.delete("/{org_id}")
def delete_organization(org_id: str, db: Session = Depends(get_db)):
    pass
