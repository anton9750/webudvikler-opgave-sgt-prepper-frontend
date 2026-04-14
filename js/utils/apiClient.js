export const request = async (url, method = 'GET', body) => {
  if (!url) throw new Error('Missing url');

  const response = await fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    ...(body && method !== 'GET' && { body: JSON.stringify(body) })
  });

  if (response.status === 401) {
    throw new Error('Unauthorized - please login again');
  }

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data?.message || response.statusText);
    error.status = response.status;
    throw error;
  }

  return data;
};