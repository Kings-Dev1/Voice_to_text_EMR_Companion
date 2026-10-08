import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  getAppInfo: (): string => "Voice-to-Text EMR Desktop App",
});