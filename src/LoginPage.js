import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>登入</h2>
      <TextField label="帳號" variant="outlined" fullWidth margin="normal" />
      <TextField label="密碼" type="password" variant="outlined" fullWidth margin="normal" />
      <FormControlLabel control={<Checkbox name="remember" color="primary" />} label="記住我" />
      <Button variant="contained" color="primary" fullWidth>登入</Button>
      <a href="/forgot-password">忘記密碼？</a>
    </div>
  );
};

export default LoginPage;
