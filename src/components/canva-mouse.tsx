'use client';

import { getIpInfo } from '@/services/ip.services';
import { useEffect, useState } from 'react';

export function CanvaMouse() {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getIp = async () => {
      setLoading(true);
      const { data } = await getIpInfo();
      setIp(data);
      setLoading(false);
    };
    getIp();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return <pre>{JSON.stringify(ip, null, 2)}</pre>;
}
