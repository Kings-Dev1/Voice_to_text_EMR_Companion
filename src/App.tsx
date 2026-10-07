import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import NoteDetail from "./pages/NoteDetail/NoteDetail";
import Devices from "./pages/Devices/Devices";
import PairDevice from "./pages/PairDevice/PairDevice";
import WidgetSettings from "./pages/Settings/Widget/WidgetSettings";
import GeneralSettings from "./pages/Settings/General/GeneralSettings";
import PrivacySettings from "./pages/Settings/Privacy/PrivacySettings";
import DesktopLayout from "./layouts/DesktopLayout/DesktopLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/sign-in" element={<SignIn />} />

        <Route element={<DesktopLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:id" element={<NoteDetail />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/devices/pair" element={<PairDevice />} />

          <Route
            path="/settings/widget"
            element={<WidgetSettings />}
          />

          <Route
            path="/settings/general"
            element={<GeneralSettings />}
          />

          <Route
            path="/settings/privacy"
            element={<PrivacySettings />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;