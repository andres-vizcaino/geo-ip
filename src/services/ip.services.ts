export const getIpInfo = async () => {
  const res = await fetch('/api/info');
  const data = await res.json();
  return data;
};
