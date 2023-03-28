import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/header/Header';

function Main() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1"><Outlet /></div>
      <Footer />
    </div>
  );
}

export default Main;
