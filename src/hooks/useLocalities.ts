import { useState, useEffect } from 'react';
import { Locality } from '../types/models';
import { localityService } from '../services/localityService'; 

export default function useLocalities() {
  const [localities, setLocalities] = useState<Locality[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLocalities = async () => {
      try {
        setLoading(true);
        const data = await localityService.getAll();
        setLocalities(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Une erreur est survenue'));
      } finally {
        setLoading(false);
      }
    };

    fetchLocalities();
  }, []);

  return { localities, loading, error };
};