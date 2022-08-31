import React from "react";
import "./App.css";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { ProfilePage } from "./screens/ProfilePage/ProfilePage";
import { EditPage } from "./screens/EditPage/EditPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
