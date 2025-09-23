import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.capacitormobile',
  appName: 'Capacitor Mobile',
  webDir: 'assets',
  plugins: {
    StatusBar: {
      style: 'dark',
      backgroundColor: '#0c0c1a',
      overlaysWebView: false,
      androidDisplayMode: 'fullscreen'
    },
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: '#0c0c1a'
    }
  },
  android: {
    appendUserAgent: 'CapacitorApp',
    webContentsDebuggingEnabled: false,
    overrideUserAgent: 'CapacitorApp',
    allowMixedContent: true,
    captureInput: true,
    webSecurity: false,
    statusBar: {
      style: 'dark',
      backgroundColor: '#0c0c1a',
      overlaysWebView: false
    }
  }
};

export default config;
