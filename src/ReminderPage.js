import React from 'react';
import { Button, IconButton, Grid, Switch, List, ListItem, ListItemText, ListItemSecondaryAction, AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ReminderPage.css';

const ReminderPage = ({ reminders, setReminders }) => {
  const navigate = useNavigate();

  const handleToggle = (index) => {
    const updatedReminders = reminders.map((reminder, i) => {
      if (i === index) {
        return { ...reminder, enabled: !reminder.enabled };
      }
      return reminder;
    });
    setReminders(updatedReminders);
  };

  const handleDelete = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  const handleEdit = (index) => {
    const reminder = reminders[index];
    navigate('/add-reminder', { state: { reminder, index } });
  };

  return (
    <div className="reminder-page">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            用藥提醒
          </Typography>
          <Typography>
            候怡萱
          </Typography>
        </Toolbar>
      </AppBar>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => navigate('/add-reminder')}
        style={{ marginTop: '20px' }}
      >
        新增
      </Button>
      {reminders.length > 0 ? (
        <List className="reminder-list" style={{ marginTop: '20px' }}>
          {reminders.map((reminder, index) => (
            <ListItem key={index} className="reminder-item">
              <ListItemText primary={`${reminder.time} - ${reminder.content}`} className="reminder-text" />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  checked={reminder.enabled}
                  onChange={() => handleToggle(index)}
                />
                <IconButton onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>
                  <img src="/icons/edit-icon.png" alt="Edit" width="24" height="24" />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
                  <img src="/icons/delete-icon.png" alt="Delete" width="24" height="24" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>目前沒有記錄</p>
      )}
      <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} onClick={() => window.history.back()}>
        回上頁
      </Button>
    </div>
  );
};

export default ReminderPage;
