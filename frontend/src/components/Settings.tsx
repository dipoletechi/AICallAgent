import React, { useState, useEffect } from 'react';
import { UserSettings } from '../types/settings';
import { saveSettings, loadSettings } from '../utils/localStorage';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingsChange: (settings: UserSettings) => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose, onSettingsChange }) => {
  const [settings, setSettings] = useState<UserSettings>(loadSettings());
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSettings(loadSettings());
      setIsDirty(false);
    }
  }, [isOpen]);

  const handleInputChange = (field: keyof UserSettings, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }));
    setIsDirty(true);
  };

  const handleSave = () => {
    saveSettings(settings);
    onSettingsChange(settings);
    setIsDirty(false);
    onClose();
  };

  const handleCancel = () => {
    setSettings(loadSettings());
    setIsDirty(false);
    onClose();
  };

  const handleReset = () => {
    const emptySettings: UserSettings = {
      TWILIO_ACCOUNT_SID: '',
      TWILIO_AUTH_TOKEN: '',
      TWILIO_PHONE_NUMBER: '',
      VAPI_API_KEY: '',
      VAPI_ASSISTANT_ID: '',
      VAPI_PHONE_NUMBER_ID: '',
    };
    setSettings(emptySettings);
    setIsDirty(true);
  };

  if (!isOpen) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-panel">
        <div className="settings-header">
          <h2>⚙️ Settings</h2>
          <button className="close-button" onClick={handleCancel}>
            ✕
          </button>
        </div>
        
        <div className="settings-content">
          <div className="settings-section">
            <h3>📞 Twilio Configuration</h3>
            <div className="form-group">
              <label htmlFor="twilio-account-sid">Account SID</label>
              <input
                id="twilio-account-sid"
                type="text"
                value={settings.TWILIO_ACCOUNT_SID}
                onChange={(e) => handleInputChange('TWILIO_ACCOUNT_SID', e.target.value)}
                placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="settings-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="twilio-auth-token">Auth Token</label>
              <input
                id="twilio-auth-token"
                type="password"
                value={settings.TWILIO_AUTH_TOKEN}
                onChange={(e) => handleInputChange('TWILIO_AUTH_TOKEN', e.target.value)}
                placeholder="Your Twilio Auth Token"
                className="settings-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="twilio-phone-number">Phone Number</label>
              <input
                id="twilio-phone-number"
                type="tel"
                value={settings.TWILIO_PHONE_NUMBER}
                onChange={(e) => handleInputChange('TWILIO_PHONE_NUMBER', e.target.value)}
                placeholder="+1234567890"
                className="settings-input"
              />
            </div>
          </div>

          <div className="settings-section">
            <h3>🤖 Vapi AI Configuration</h3>
            <div className="form-group">
              <label htmlFor="vapi-api-key">API Key</label>
              <input
                id="vapi-api-key"
                type="password"
                value={settings.VAPI_API_KEY}
                onChange={(e) => handleInputChange('VAPI_API_KEY', e.target.value)}
                placeholder="Your Vapi API Key"
                className="settings-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vapi-assistant-id">Assistant ID</label>
              <input
                id="vapi-assistant-id"
                type="text"
                value={settings.VAPI_ASSISTANT_ID}
                onChange={(e) => handleInputChange('VAPI_ASSISTANT_ID', e.target.value)}
                placeholder="Your Vapi Assistant ID"
                className="settings-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vapi-phone-number-id">Phone Number ID</label>
              <input
                id="vapi-phone-number-id"
                type="text"
                value={settings.VAPI_PHONE_NUMBER_ID}
                onChange={(e) => handleInputChange('VAPI_PHONE_NUMBER_ID', e.target.value)}
                placeholder="Your Vapi Phone Number ID"
                className="settings-input"
              />
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button 
            className="settings-button secondary" 
            onClick={handleReset}
            disabled={!isDirty}
          >
            Reset
          </button>
          <button 
            className="settings-button secondary" 
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            className="settings-button primary" 
            onClick={handleSave}
            disabled={!isDirty}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
