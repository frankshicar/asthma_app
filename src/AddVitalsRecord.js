import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNavigate, useLocation } from 'react-router-dom';
import './AddVitalsRecord.css';

const AddVitalsRecord = ({ addRecord, updateRecord }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [bloodOxygen, setBloodOxygen] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { record, index } = location.state || {};

  useEffect(() => {
    if (record) {
      setSelectedDate(record.date);
      setTime(record.time);
      setBloodSugar(record.bloodSugar);
      setBloodOxygen(record.bloodOxygen);
      setBloodPressure(record.bloodPressure);
    }
  }, [record]);

  const handleAddRecord = () => {
    const newRecord = { date: selectedDate, time, bloodSugar, bloodOxygen, bloodPressure };
    if (index !== undefined) {
      updateRecord(newRecord, index);
    } else {
      addRecord(newRecord);
    }
    navigate('/vitals'); // 跳轉回生命徵象紀錄頁面
  };

  return (
    <div className="add-vitals-record">
      <h2>{record ? '編輯生命徵象紀錄' : '新增生命徵象紀錄'}</h2>
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
        label="血糖"
        value={bloodSugar}
        onChange={(e) => setBloodSugar(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="血氧"
        value={bloodOxygen}
        onChange={(e) => setBloodOxygen(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="血壓"
        value={bloodPressure}
        onChange={(e) => setBloodPressure(e.target.value)}
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
        onClick={() => navigate('/vitals')}
      >
        回上頁
      </Button>
    </div>
  );
};

export default AddVitalsRecord;
