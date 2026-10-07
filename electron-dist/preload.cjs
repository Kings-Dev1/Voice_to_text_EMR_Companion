"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
    getAppInfo: () => "Voice-to-Text EMR Desktop App",
});
