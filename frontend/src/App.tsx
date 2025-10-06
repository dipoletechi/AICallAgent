import React, { useState } from 'react';
import './App.css';
import CallInterface from './components/CallInterface';
import Header from './components/Header';
import Footer from './components/Footer';
import Help from './components/Help';
import Login from './components/Login';

function App() {
  const [callStatus, setCallStatus] = useState<string>('');
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleHelpClick = () => {
    setIsHelpOpen(true);
  };

  const handleHelpClose = () => {
    setIsHelpOpen(false);
  };

  const handleLogin = (authenticated: boolean) => {
    setIsAuthenticated(authenticated);
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Show main app if authenticated
  return (
    <div className="App">
      <Header onHelpClick={handleHelpClick} />
      <main className="main-content">
        <CallInterface onCallStatusChange={setCallStatus} />
      </main>
      <Footer />
      <Help 
        isOpen={isHelpOpen}
        onClose={handleHelpClose}
      />
    </div>
  );
}

export default App;