import React from 'react';

interface Asset {
  id: string;
  name: string;
  status: string;
  category: string;
}

interface AssetListProps {
  assets: Asset[];
  onSelect?: (id: string) => void;
}

export const AssetList: React.FC<AssetListProps> = ({ assets, onSelect }) => {
  return (
    <div className="asset-list">
      {/* Asset list implementation */}
    </div>
  );
};
