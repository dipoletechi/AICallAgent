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
            <h3>🚀 How to Use AI Call Agent</h3>
            <div className="help-steps">
              <h4>Step 1: Choose Your Agent</h4>
              <ol>
                <li>Select either <strong>🤖 Vapi AI</strong> or <strong>📞 Twilio</strong> from the dropdown</li>
                <li>Vapi AI provides AI-powered conversations with background music</li>
                <li>Twilio provides traditional call functionality with music options</li>
              </ol>

              <h4>Step 2: Configure Your Call</h4>
              <ol>
                <li>For <strong>Vapi AI</strong>: Add a custom introduction message (optional)</li>
                <li>For <strong>Twilio</strong>: Choose music type or custom message</li>
                <li>Enter the phone number you want to call (include country code, e.g., +1234567890)</li>
              </ol>

              <h4>Step 3: Make the Call</h4>
              <ol>
                <li>Click the <strong>Make Call</strong> button</li>
                <li>Wait for the call to be initiated</li>
                <li>Monitor the status in the interface</li>
              </ol>
            </div>
          </div>

          <div className="help-section">
            <h3>📞 Twilio Setup (Backend Configuration)</h3>
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

              <h4>Step 3: Configure Backend</h4>
              <ul>
                <li>Copy <code>backend/env.example</code> to <code>backend/.env</code></li>
                <li>Replace placeholder values with your actual credentials:</li>
                <li><strong>TWILIO_ACCOUNT_SID:</strong> Your Account SID from console</li>
                <li><strong>TWILIO_AUTH_TOKEN:</strong> Your Auth Token from console</li>
                <li><strong>TWILIO_PHONE_NUMBER:</strong> Your purchased phone number (format: +1234567890)</li>
                <li><strong>BASE_URL:</strong> Your public URL (use ngrok for local testing)</li>
              </ul>
            </div>
          </div>

          <div className="help-section">
            <h3>🤖 Vapi AI Setup (Backend Configuration)</h3>
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

              <h4>Step 3: Configure Backend</h4>
              <ul>
                <li>Copy <code>backend/env.example</code> to <code>backend/.env</code></li>
                <li>Replace placeholder values with your actual credentials:</li>
                <li><strong>VAPI_API_KEY:</strong> Your API key from dashboard</li>
                <li><strong>VAPI_ASSISTANT_ID:</strong> Your assistant ID</li>
                <li><strong>VAPI_PHONE_NUMBER_ID:</strong> Your phone number ID</li>
                <li><strong>BASE_URL:</strong> Your public URL (use ngrok for local testing)</li>
              </ul>
            </div>
          </div>

          <div className="help-section">
            <h3>🔧 Backend Setup</h3>
            <ol>
              <li>Navigate to the <code>backend</code> directory</li>
              <li>Copy <code>env.example</code> to <code>.env</code></li>
              <li>Fill in your actual API credentials in the <code>.env</code> file</li>
              <li>Install dependencies: <code>npm install</code></li>
              <li>Start the backend server: <code>npm start</code></li>
              <li>For local testing, use <a href="https://ngrok.com" target="_blank" rel="noopener noreferrer">ngrok</a> to expose your local server</li>
            </ol>
          </div>

          <div className="help-section">
            <h3>⚠️ Important Notes</h3>
            <ul>
              <li>This application requires backend configuration with your API credentials</li>
              <li>Never commit your <code>.env</code> file to version control</li>
              <li>Twilio requires a public URL for webhooks (use ngrok for local testing)</li>
              <li>Vapi calls work with AI-powered conversations</li>
              <li>Twilio calls play music or custom messages</li>
              <li>Make sure your backend server is running before making calls</li>
            </ul>
          </div>

          <div className="help-section">
            <h3>🔗 Useful Links</h3>
            <ul>
              <li><a href="https://www.twilio.com/docs" target="_blank" rel="noopener noreferrer">Twilio Documentation</a></li>
              <li><a href="https://docs.vapi.ai" target="_blank" rel="noopener noreferrer">Vapi Documentation</a></li>
              <li><a href="https://ngrok.com" target="_blank" rel="noopener noreferrer">ngrok (for local webhooks)</a></li>
              <li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js (for backend)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;