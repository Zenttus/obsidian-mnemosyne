// MnemosyneSettings.ts

export interface MnemosyneSettings {
    includedTags: string[];
    excludedTags: string[];
    timerEnabled: boolean;
    timePerNote: number;
    tagFilterMode: 'AND' | 'OR';
    effectType: 'Background' | 'FillUp';
    startColor: string;
    endColor: string;
    showStatusBarTimer: boolean;
  }
  
  export const DEFAULT_SETTINGS: MnemosyneSettings = {
    includedTags: [],
    excludedTags: [],
    timerEnabled: false,
    timePerNote: 60,
    tagFilterMode: 'AND',
    effectType: 'Background',
    startColor: '#00FF00',
    endColor: '#FF0000',
    showStatusBarTimer: true,
  };
  