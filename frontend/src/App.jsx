import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
import Home from "./Home";
import Chat from "./Chat";

const App = () => {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
};

export default App;
