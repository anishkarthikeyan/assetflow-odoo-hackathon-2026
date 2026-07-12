import { useState, useEffect } from 'react';
import { assetService, Asset } from '../services/assetService';

export const useAssets = (params?: Record<string, any>) => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        setLoading(true);
        const data = await assetService.getAll(params);
        setAssets(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch assets');
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, [JSON.stringify(params)]);

  return { assets, loading, error };
};
