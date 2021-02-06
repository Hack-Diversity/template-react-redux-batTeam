/* eslint-disable semi */
import React from 'react';
import NavBar from './NavBar';
import HoursLocation from './HoursLocation';
import Footer from './Footer';


import icons from '../styles/assets/icons.svg';

const PageLayout = ({children}) =>
    <div className="p-2">
      <div className="page-layout--details">
        <NavBar />
        <HoursLocation />
          {children}
      </div>
    </div>

export default PageLayout;
