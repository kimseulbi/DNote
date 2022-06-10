import React from "react";
import Header from "./Header";

const MainStructure = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainStructure;
