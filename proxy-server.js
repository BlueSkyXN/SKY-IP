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
const { fetchIpInfo, fetchCityInfo } = require('./utils/proxy');

app.get('/api/ip/:ip', async (req, res) => {
    try {
        const ip = req.params.ip;
        const data = await fetchIpInfo(ip);
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
        const data = await fetchCityInfo(lat, lng);
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