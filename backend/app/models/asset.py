from datetime import datetime
from sqlalchemy import Column, String, DateTime, Float, Text
from sqlalchemy.dialects.postgresql import UUID
import uuid

from ..config.database import Base


class Asset(Base):
    __tablename__ = "assets"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    category = Column(String(50), nullable=False)
    status = Column(String(50), nullable=False, default="available")
    location = Column(String(255), nullable=True)
    organization_id = Column(UUID(as_uuid=True), nullable=False)
    purchase_date = Column(DateTime, nullable=True)
    purchase_value = Column(Float, nullable=True)
    current_value = Column(Float, nullable=True)
    serial_number = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
