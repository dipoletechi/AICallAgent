import React, { useState } from 'react';
import './App.css';
import CallInterface from './components/CallInterface';
import Header from './components/Header';
import Footer from './components/Footer';
import Settings from './components/Settings';
import { UserSettings } from './types/settings';
import { loadSettings } from './utils/localStorage';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [userSettings, setUserSettings] = useState<UserSettings>(loadSettings());

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  const handleSettingsChange = (settings: UserSettings) => {
    setUserSettings(settings);
  };

  return (
    <div className="App">
      <Header onSettingsClick={handleSettingsClick} />
      <main className="main-content">
        <CallInterface 
          onCallStatusChange={() => {}} 
          userSettings={userSettings}
        />
      </main>
      <Footer />
      <Settings 
        isOpen={isSettingsOpen}
        onClose={handleSettingsClose}
        onSettingsChange={handleSettingsChange}
      />
    </div>
  );
}

export default App;