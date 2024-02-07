import React from "react";
import { Route, Routes } from "react-router-dom";
import Join from "../component/Join/Join";
import Chat from "../component/Chat/Chat";
const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default Mainroute;
