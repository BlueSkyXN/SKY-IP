/**
 * 通用代理工具，兼容 Node.js 和 Cloudflare Pages Functions
 */
async function fetchIpInfo(ip) {
  const url = `https://apimobile.meituan.com/locate/v2/ip/loc?rgeo=true&ip=${ip}`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  });
  return await response.json();
}

async function fetchCityInfo(lat, lng) {
  const url = `https://apimobile.meituan.com/group/v1/city/latlng/${lat},${lng}?tag=0`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  });
  return await response.json();
}

module.exports = {
  fetchIpInfo,
  fetchCityInfo
};