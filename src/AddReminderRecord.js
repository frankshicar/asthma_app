import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import './AddReminderRecord.css';

const AddReminderRecord = ({ addRecord, updateRecord }) => {
  const [time, setTime] = useState('');
  const [content, setContent] = useState('');
  const [enabled, setEnabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { reminder, index } = location.state || {};

  useEffect(() => {
    if (reminder) {
      setTime(reminder.time);
      setContent(reminder.content);
      setEnabled(reminder.enabled);
    }
  }, [reminder]);

  const handleAddRecord = () => {
    const newRecord = { time, content, enabled };
    if (index !== undefined) {
      updateRecord(newRecord, index);
    } else {
      addRecord(newRecord);
    }
    navigate('/reminder'); // 跳轉回提醒頁面
  };

  return (
    <div className="add-reminder-record">
      <h2>{reminder ? '編輯提醒' : '新增提醒'}</h2>
      <TextField
        label="時間 (HH:MM)"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        label="提醒項目"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Switch
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
        }
        label="啟用"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddRecord}
        style={{ marginTop: '20px' }}
      >
        {reminder ? '更新' : '新增'}
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '20px' }}
        onClick={() => navigate('/reminder')}
      >
        回上頁
      </Button>
    </div>
  );
};

export default AddReminderRecord;
