const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// 启用CORS
app.use(cors());
app.use(express.json());

// 提供静态文件服务
app.use(express.static('.'));

// 代理API请求
app.get('/api/ip/:ip', async (req, res) => {
    try {
        const ip = req.params.ip;
        const url = `https://apimobile.meituan.com/locate/v2/ip/loc?rgeo=true&ip=${ip}`;
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('IP查询错误:', error);
        res.status(500).json({ error: '查询失败' });
    }
});

// 代理城市查询API
app.get('/api/city/:lat/:lng', async (req, res) => {
    try {
        const { lat, lng } = req.params;
        const url = `https://apimobile.meituan.com/group/v1/city/latlng/${lat},${lng}?tag=0`;
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('城市查询错误:', error);
        res.status(500).json({ error: '查询失败' });
    }
});

app.listen(PORT, () => {
    console.log(`代理服务器运行在 http://localhost:${PORT}`);
    console.log(`访问页面: http://localhost:${PORT}/index.html`);
});