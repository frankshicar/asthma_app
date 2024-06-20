import React from 'react';
import { Button, IconButton, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ExercisePage.css';

const VitalsPage = ({ records, setRecords }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };

  const handleEdit = (index) => {
    const record = records[index];
    navigate('/add-vitals', { state: { record, index } });
  };

  return (
    <div className="vitals-page">
      <h2>生命徵象紀錄</h2>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => navigate('/add-vitals')}
        style={{ marginTop: '20px' }}
      >
        新增
      </Button>
      {records.length > 0 ? (
        <Grid container spacing={2} className="record-list" style={{ marginTop: '20px' }}>
          {records.map((record, index) => (
            <Grid item xs={12} key={index} className="record-item">
              <div className="record-content">
                <div>{record.date.toLocaleDateString()} {record.time}</div>
                <div>血糖: {record.bloodSugar}</div>
                <div>血氧: {record.bloodOxygen}</div>
                <div>血壓: {record.bloodPressure}</div>
              </div>
              <div className="record-actions">
                <IconButton onClick={() => handleEdit(index)}>
                  <img src="/icons/edit-icon.png" alt="Edit" width="24" height="24" />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)}>
                  <img src="/icons/delete-icon.png" alt="Delete" width="24" height="24" />
                </IconButton>
              </div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>目前沒有記錄</p>
      )}
      <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} onClick={() => window.history.back()}>
        回上頁
      </Button>
    </div>
  );
};

export default VitalsPage;
