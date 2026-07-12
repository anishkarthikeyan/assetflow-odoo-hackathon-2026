from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.organization import Organization
from ..repositories.organizationRepository import OrganizationRepository


class OrganizationService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = OrganizationRepository(db)

    def get_all(self) -> List[Organization]:
        pass

    def get_tree(self) -> List[Organization]:
        pass

    def get_by_id(self, org_id: str) -> Optional[Organization]:
        pass

    def create(self, org_data: dict) -> Organization:
        pass

    def update(self, org_id: str, org_data: dict) -> Optional[Organization]:
        pass

    def delete(self, org_id: str) -> bool:
        pass

    def get_children(self, parent_id: str) -> List[Organization]:
        pass
