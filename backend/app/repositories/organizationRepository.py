from typing import List, Optional
from sqlalchemy.orm import Session

from ..models.organization import Organization


class OrganizationRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> List[Organization]:
        pass

    def get_tree(self) -> List[Organization]:
        pass

    def get_by_id(self, org_id: str) -> Optional[Organization]:
        pass

    def create(self, organization: Organization) -> Organization:
        pass

    def update(self, organization: Organization) -> Organization:
        pass

    def delete(self, org_id: str) -> bool:
        pass

    def get_children(self, parent_id: str) -> List[Organization]:
        pass
