import React from 'react';
import { TextField, Button } from '@mui/material';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h2>註冊</h2>
      <TextField label="姓名" variant="outlined" fullWidth margin="normal" />
      <TextField label="電子郵件" variant="outlined" fullWidth margin="normal" />
      <TextField label="帳號" variant="outlined" fullWidth margin="normal" />
      <TextField label="密碼" type="password" variant="outlined" fullWidth margin="normal" />
      <TextField label="確認密碼" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>註冊</Button>
    </div>
  );
};

export default RegisterPage;
