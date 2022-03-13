import React from 'react';
import TopNavbar from './components/Navbar';
const Layout = ({children}) => {
  return (
    <>
      <TopNavbar/>
      {children}
    </>
    
  );
};

export default Layout;