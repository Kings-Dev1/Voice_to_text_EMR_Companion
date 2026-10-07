const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getAppInfo: () => "Voice-to-Text EMR Desktop App",
});