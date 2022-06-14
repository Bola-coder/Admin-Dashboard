import React from "react";
import Sidebar from "../components/Sidebar";
import "./../css/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
