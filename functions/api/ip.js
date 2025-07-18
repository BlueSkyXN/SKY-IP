export async function onRequest(context) {
  const { params } = context;
  const ip = params.ip;
  const url = `https://apimobile.meituan.com/locate/v2/ip/loc?rgeo=true&ip=${ip}`;
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