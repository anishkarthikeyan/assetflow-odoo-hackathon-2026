import React from 'react';

interface AssetCardProps {
  id: string;
  name: string;
  status: string;
  category: string;
  location?: string;
}

export const AssetCard: React.FC<AssetCardProps> = ({ id, name, status, category, location }) => {
  return (
    <div className="asset-card" data-status={status}>
      <h4>{name}</h4>
      <p>Category: {category}</p>
      <p>Status: {status}</p>
      {location && <p>Location: {location}</p>}
    </div>
  );
};
