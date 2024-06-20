import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNavigate, useLocation } from 'react-router-dom';
import './AddDietRecord.css';

const AddDietRecord = ({ addRecord, updateRecord }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [bpm, setBpm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { record, index } = location.state || {};

  useEffect(() => {
    if (record) {
      setSelectedDate(record.date);
      setTime(record.time);
      setExercise(record.exercise);
      setDuration(record.duration);
      setBpm(record.bpm);
    }
  }, [record]);

  const handleAddRecord = () => {
    const newRecord = { date: selectedDate, time, exercise, duration, bpm };
    if (index !== undefined) {
      updateRecord(newRecord, index);
    } else {
      addRecord(newRecord);
    }
    navigate('/diet'); // 跳轉回飲食紀錄頁面
  };

  return (
    <div className="add-diet-record">
      <h2>{record ? '編輯飲食紀錄' : '新增飲食紀錄'}</h2>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="日期"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
      </LocalizationProvider>
      <TextField
        label="時間 (HH:MM)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="食物或飲料"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddRecord}
        style={{ marginTop: '20px' }}
      >
        {record ? '更新' : '新增'}
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '20px' }}
        onClick={() => navigate('/diet')}
      >
        回上頁
      </Button>
    </div>
  );
};

export default AddDietRecord;
