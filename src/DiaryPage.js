import React, { useState } from 'react';
import { TextField, Button, Grid, AppBar, Toolbar, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import './DiaryPage.css';

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="diary-page">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            使用者日記
          </Typography>
        </Toolbar>
      </AppBar>
      
      <div className="toolbar-spacer"></div>
      
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="日期"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
      </LocalizationProvider>
      
      <Grid container spacing={2} className="button-grid">
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleNavigate('/allergy')}
          >
            過敏原記錄
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleNavigate('/vitals')}
          >
            血壓/血糖/血氧記錄
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleNavigate('/drug')}
          >
            藥物記錄
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleNavigate('/diet')}
          >
            飲食記錄
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleNavigate('/exercise')}
          >
            運動記錄
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleNavigate('/peakflow')}
          >
            尖峰呼氣流速記錄
          </Button>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} onClick={() => handleNavigate('/')}>
        回上頁
      </Button>
    </div>
  );
};

export default DiaryPage;
