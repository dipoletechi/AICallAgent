import React from 'react';

interface HeaderProps {
  onHelpClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHelpClick }) => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;
