import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button } from '@mui/material';
import Navbar from './Navbar';
import './ProfilePage.css';

const initialProfile = {
  name: '侯怡萱',
  age: '',
  height: '',
  weight: '',
  phone: '',
  email: 'abc123@gmail.com',
  username: 'abc123',
  password: '********',
  confirmPassword: '********',
  allergies: '',
  peakFlow: ''
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // 在這裡保存資料，可以調用 API 或其他保存方法
  };

  return (
    <div className="profile-page">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            個人資訊
          </Typography>
          <Typography>
            候怡萱
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="profile-container">
        <Typography variant="h5" gutterBottom>
          個人資訊
        </Typography>
        {isEditing ? (
          <div className="profile-edit">
            <TextField label="姓名" name="name" value={profile.name} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="年齡" name="age" value={profile.age} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="身高" name="height" value={profile.height} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="體重" name="weight" value={profile.weight} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="手機" name="phone" value={profile.phone} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="E-mail" name="email" value={profile.email} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="帳號" name="username" value={profile.username} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="密碼" name="password" value={profile.password} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="確認密碼" name="confirmPassword" value={profile.confirmPassword} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="過敏原" name="allergies" value={profile.allergies} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="尖峰呼氣流速理想值" name="peakFlow" value={profile.peakFlow} onChange={handleChange} fullWidth margin="normal" />

            <Button variant="contained" color="primary" onClick={handleSave} fullWidth style={{ marginTop: '20px' }}>
              儲存
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setIsEditing(false)} fullWidth style={{ marginTop: '10px' }}>
              回上頁
            </Button>
          </div>
        ) : (
          <div className="profile-view">
            <Typography variant="body1">姓名: {profile.name}</Typography>
            <Typography variant="body1">年齡: {profile.age}</Typography>
            <Typography variant="body1">身高: {profile.height}</Typography>
            <Typography variant="body1">體重: {profile.weight}</Typography>
            <Typography variant="body1">手機: {profile.phone}</Typography>
            <Typography variant="body1">E-mail: {profile.email}</Typography>
            <Typography variant="body1">帳號: {profile.username}</Typography>
            <Typography variant="body1">密碼: {profile.password}</Typography>
            <Typography variant="body1">過敏原: {profile.allergies}</Typography>
            <Typography variant="body1">尖峰呼氣流速理想值: {profile.peakFlow}</Typography>

            <Button variant="contained" color="primary" onClick={() => setIsEditing(true)} fullWidth style={{ marginTop: '20px' }}>
              編輯
            </Button>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
};

export default ProfilePage;
