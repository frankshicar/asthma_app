import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import DiaryPage from './DiaryPage';
import Navbar from './Navbar';
import ExercisePage from './ExercisePage';
import AddExerciseRecord from './AddExerciseRecord';
import DrugPage from './DrugPage';
import AddDrugRecord from './AddDrugRecord';
import VitalsPage from './VitalsPage';
import AddVitalsRecord from './AddVitalsRecord';
import AllergyPage from './AllergyPage';
import AddAllergyRecord from './AddAllergyRecord';
import DietPage from './DietPage';
import AddDietRecord from './AddDietRecord';
import PeakflowPage from './PeakflowPage';
import AddPeakflowRecord from './AddPeakflowRecord';
import AirQualityPage from './AirQualityPage';
import ReminderPage from './ReminderPage';
import AddReminderRecord from './AddReminderRecord';
import ProfilePage from './ProfilePage';


const App = () => {
  const [records, setRecords] = useState([]);
  const [reminders, setReminders] = useState([]);

  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  const updateRecord = (updatedRecord, index) => {
    const updatedRecords = [...records];
    updatedRecords[index] = updatedRecord;
    setRecords(updatedRecords);
  };

  const addReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  const updateReminder = (updatedReminder, index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index] = updatedReminder;
    setReminders(updatedReminders);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/exercise" element={<ExercisePage records={records} setRecords={setRecords} />} />
          <Route path="/add-exercise" element={<AddExerciseRecord addRecord={addRecord} updateRecord={updateRecord} />} />
          <Route path="/drug" element={<DrugPage records={records} setRecords={setRecords} />} />
          <Route path="/add-drug" element={<AddDrugRecord addRecord={addRecord} updateRecord={updateRecord} />} />
          <Route path="/vitals" element={<VitalsPage records={records} setRecords={setRecords} />} />
          <Route path="/add-vitals" element={<AddVitalsRecord addRecord={addRecord} updateRecord={updateRecord} />} />
          <Route path="/allergy" element={<AllergyPage records={records} setRecords={setRecords} />} />
          <Route path="/add-allergy" element={<AddAllergyRecord addRecord={addRecord} updateRecord={updateRecord} />} />
          <Route path="/diet" element={<DietPage records={records} setRecords={setRecords} />} />
          <Route path="/add-diet-record" element={<AddDietRecord addRecord={addRecord} updateRecord={updateRecord} />} />
          <Route path="/peakflow" element={<PeakflowPage records={records} setRecords={setRecords} />} />
          <Route path="/add-peakflow" element={<AddPeakflowRecord addRecord={addRecord} updateRecord={updateRecord} />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/airquality" element={<AirQualityPage />} />
          <Route path="/reminder" element={<ReminderPage reminders={reminders} setReminders={setReminders} />} />
          <Route path="/add-reminder" element={<AddReminderRecord addRecord={addReminder} updateRecord={updateReminder} />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
