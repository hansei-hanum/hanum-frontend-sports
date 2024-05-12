import { OnlyJSON, linkBridge } from '@webview-bridge/web';

export type AppBridgeState = {
  goToScreen: () => Promise<void>;
};

export type AppBridge = {
  getState: () => AppBridgeState;
  setState: (newState: Partial<OnlyJSON<AppBridgeState>>) => void;
  subscribe: (listener: (newState: AppBridgeState, prevState: AppBridgeState) => void) => () => void;
};

export const bridge = linkBridge<AppBridge>({
  onReady: async () => {
    await console.log('bridge is ready');
  },
});
