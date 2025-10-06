import { UserSettings, defaultSettings } from '../types/settings';

const SETTINGS_KEY = 'ai-call-agent-settings';

export const saveSettings = (settings: UserSettings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save settings to localStorage:', error);
  }
};

export const loadSettings = (): UserSettings => {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with defaults to ensure all fields exist
      return { ...defaultSettings, ...parsed };
    }
  } catch (error) {
    console.error('Failed to load settings from localStorage:', error);
  }
  return defaultSettings;
};

export const clearSettings = (): void => {
  try {
    localStorage.removeItem(SETTINGS_KEY);
  } catch (error) {
    console.error('Failed to clear settings from localStorage:', error);
  }
};
