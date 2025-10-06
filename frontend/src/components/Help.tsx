import React from 'react';

interface HelpProps {
  isOpen: boolean;
  onClose: () => void;
}

const Help: React.FC<HelpProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="help-overlay">
      <div className="help-modal">
        <div className="help-header">
          <h2>📚 Setup Guide</h2>
          <button className="help-close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="help-content">
          <div className="help-section">
            <h3>🔧 How to Configure Credentials</h3>
            <p>Click the ⚙️ Settings button to configure your API credentials. All settings are saved locally in your browser.</p>
          </div>

          <div className="help-section">
            <h3>📞 Twilio Setup</h3>
            <div className="help-steps">
              <h4>Step 1: Create Twilio Account</h4>
              <ol>
                <li>Go to <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">twilio.com</a></li>
                <li>Sign up for a free account</li>
                <li>Verify your phone number</li>
              </ol>

              <h4>Step 2: Get Your Credentials</h4>
              <ol>
                <li>Go to <a href="https://console.twilio.com" target="_blank" rel="noopener noreferrer">Twilio Console</a></li>
                <li>Find your <strong>Account SID</strong> on the dashboard</li>
                <li>Find your <strong>Auth Token</strong> (click to reveal)</li>
                <li>Buy a phone number from <a href="https://console.twilio.com/us1/develop/phone-numbers/manage/incoming" target="_blank" rel="noopener noreferrer">Phone Numbers</a></li>
              </ol>

              <h4>Step 3: Configure in Settings</h4>
              <ul>
                <li><strong>TWILIO_ACCOUNT_SID:</strong> Your Account SID from console</li>
                <li><strong>TWILIO_AUTH_TOKEN:</strong> Your Auth Token from console</li>
                <li><strong>TWILIO_PHONE_NUMBER:</strong> Your purchased phone number (format: +1234567890)</li>
              </ul>
            </div>
          </div>

          <div className="help-section">
            <h3>🤖 Vapi AI Setup</h3>
            <div className="help-steps">
              <h4>Step 1: Create Vapi Account</h4>
              <ol>
                <li>Go to <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">vapi.ai</a></li>
                <li>Sign up for an account</li>
                <li>Complete email verification</li>
              </ol>

              <h4>Step 2: Get Your Credentials</h4>
              <ol>
                <li>Go to <a href="https://dashboard.vapi.ai" target="_blank" rel="noopener noreferrer">Vapi Dashboard</a></li>
                <li>Navigate to <strong>API Keys</strong> section</li>
                <li>Create a new API key and copy it</li>
                <li>Go to <strong>Assistants</strong> section</li>
                <li>Create a new assistant or use existing one</li>
                <li>Copy the Assistant ID</li>
                <li>Go to <strong>Phone Numbers</strong> section</li>
                <li>Buy a phone number and copy the Phone Number ID</li>
              </ol>

              <h4>Step 3: Configure in Settings</h4>
              <ul>
                <li><strong>VAPI_API_KEY:</strong> Your API key from dashboard</li>
                <li><strong>VAPI_ASSISTANT_ID:</strong> Your assistant ID</li>
                <li><strong>VAPI_PHONE_NUMBER_ID:</strong> Your phone number ID</li>
              </ul>
            </div>
          </div>

          <div className="help-section">
            <h3>🚀 How to Make Calls</h3>
            <ol>
              <li>Configure your credentials using the Settings panel</li>
              <li>Choose between <strong>Vapi AI</strong> or <strong>Twilio</strong> provider</li>
              <li>Enter the phone number you want to call (include country code, e.g., +1234567890)</li>
              <li>For Twilio: Select music type or custom message</li>
              <li>For Vapi: Add custom message if needed</li>
              <li>Click <strong>Make Call</strong> button</li>
            </ol>
          </div>

          <div className="help-section">
            <h3>⚠️ Important Notes</h3>
            <ul>
              <li>All credentials are stored locally in your browser</li>
              <li>Never share your API keys with others</li>
              <li>Twilio requires a public URL for webhooks (use ngrok for local testing)</li>
              <li>Vapi calls work with AI-powered conversations</li>
              <li>Twilio calls play music or custom messages</li>
            </ul>
          </div>

          <div className="help-section">
            <h3>🔗 Useful Links</h3>
            <ul>
              <li><a href="https://www.twilio.com/docs" target="_blank" rel="noopener noreferrer">Twilio Documentation</a></li>
              <li><a href="https://docs.vapi.ai" target="_blank" rel="noopener noreferrer">Vapi Documentation</a></li>
              <li><a href="https://ngrok.com" target="_blank" rel="noopener noreferrer">ngrok (for local webhooks)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
