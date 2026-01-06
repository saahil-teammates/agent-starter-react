export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Teammates',
  pageTitle: 'Sara Interviewer',
  pageDescription: 'A voice interviewer built with LiveKit',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: 'https://www.teammates.ai/assets/images/teammates_logo_black.png',
  accent: '#0047AF',
  logoDark: 'https://www.teammates.ai/assets/images/teammates_logo_black.png',
  accentDark: '#1fd5f9',
  startButtonText: 'Start Interview',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: 'sara-interviewer',
};
