import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Card, CardContent } from '@mui/material';
import Navbar from './Navbar'; // 確保正確的導入路徑
import './AirQualityPage.css';

const areas = [
  // 台北
  { name: '中山區', city: '台北', aqi: 26, quality: '差', weather: '局部多雲', maxTemp: 29, minTemp: 19 },
  { name: '松山區', city: '台北', aqi: 30, quality: '中等', weather: '晴', maxTemp: 28, minTemp: 18 },
  { name: '大安區', city: '台北', aqi: 22, quality: '良好', weather: '多雲', maxTemp: 27, minTemp: 17 },
  // 台南
  { name: '東區', city: '台南', aqi: 35, quality: '差', weather: '晴', maxTemp: 32, minTemp: 22 },
  { name: '北區', city: '台南', aqi: 28, quality: '中等', weather: '局部多雲', maxTemp: 31, minTemp: 21 },
  { name: '中西區', city: '台南', aqi: 24, quality: '良好', weather: '多雲', maxTemp: 30, minTemp: 20 },
  // 台中
  { name: '西屯區', city: '台中', aqi: 29, quality: '中等', weather: '晴', maxTemp: 30, minTemp: 21 },
  { name: '北屯區', city: '台中', aqi: 33, quality: '差', weather: '局部多雲', maxTemp: 29, minTemp: 20 },
  { name: '南屯區', city: '台中', aqi: 21, quality: '良好', weather: '多雲', maxTemp: 28, minTemp: 19 },
];

const AirQualityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = areas.filter(area =>
    area.city.includes(searchQuery) || area.name.includes(searchQuery)
  );

  return (
    <div className="air-quality-page">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            空氣品質-搜尋
          </Typography>
          {/* <Typography>
            候怡萱
          </Typography> */}
        </Toolbar>
      </AppBar>
      <div className="search-container">
        <Typography variant="h5" gutterBottom>
          空氣品質
        </Typography>
        <div className="search-bar">
          <InputBase
            placeholder="搜尋…"
            startAdornment={<img src="/icons/search-icon.png" alt="Search" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="area-cards">
        {filteredAreas.map((area, index) => (
          <Card key={index} className="area-card">
            <CardContent>
              <Typography variant="h5">{area.name}</Typography>
              <Typography variant="h6">空氣品質：{area.quality}</Typography>
              <Typography variant="body2">最高溫度: {area.maxTemp}</Typography>
              <Typography variant="body2">最低溫度: {area.minTemp}</Typography>
              <Typography variant="body2">{area.weather}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default AirQualityPage;
