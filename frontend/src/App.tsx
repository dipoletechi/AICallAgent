import React, { useState } from 'react';
import './App.css';
import CallInterface from './components/CallInterface';
import Header from './components/Header';
import Footer from './components/Footer';
import Settings from './components/Settings';
import Help from './components/Help';
import { UserSettings } from './types/settings';
import { loadSettings } from './utils/localStorage';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
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

  const handleHelpClick = () => {
    setIsHelpOpen(true);
  };

  const handleHelpClose = () => {
    setIsHelpOpen(false);
  };

  return (
    <div className="App">
      <Header onSettingsClick={handleSettingsClick} onHelpClick={handleHelpClick} />
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
      <Help 
        isOpen={isHelpOpen}
        onClose={handleHelpClose}
      />
    </div>
  );
}

export default App;