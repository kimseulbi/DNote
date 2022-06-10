import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Auth, NotFound } from "../pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Main />} />
      <Route path="/auth/:kind" exact={true} element={<Auth />} />
      <Route element={<NotFound />} />
    </Routes>
  );
};

export default App;
