import React from 'react';

interface HeaderProps {
  onSettingsClick: () => void;
  onHelpClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick, onHelpClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🤖 AI Call Agent</h1>
        <div className="header-buttons">
          <button 
            className="help-toggle-button"
            onClick={onHelpClick}
            title="Help & Setup Guide"
          >
            ❓
          </button>
          <button 
            className="settings-toggle-button"
            onClick={onSettingsClick}
            title="Settings"
          >
            ⚙️
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
