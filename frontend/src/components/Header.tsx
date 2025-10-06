import React from 'react';

interface HeaderProps {
  onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🤖 AI Call Agent</h1>
        <button 
          className="settings-toggle-button"
          onClick={onSettingsClick}
          title="Settings"
        >
          ⚙️
        </button>
      </div>
    </header>
  );
};

export default Header;
