export async function onRequest(context) {
  const { params } = context;
  const { lat, lng } = params;
  const url = `https://apimobile.meituan.com/group/v1/city/latlng/${lat},${lng}?tag=0`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  });
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}