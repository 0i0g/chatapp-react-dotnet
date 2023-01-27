import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from '../navbar/Navbar';

const rootStyle: React.CSSProperties = {
  display: 'flex',
  height: '100vh',
  flexDirection: 'row'
}

const contentStyle: React.CSSProperties = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}

const outletStyle: React.CSSProperties = {
  flexGrow: 1,
}

const MainLayout = () => {
  return (
    <div style={rootStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <Navbar />
        <div style={outletStyle}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
