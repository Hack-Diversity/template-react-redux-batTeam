/* eslint-disable semi */
import React from 'react';
<<<<<<< HEAD
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
=======
import Logo from './Logo';

const PageLayout = () =>
    <div className="page-layout--header">
        <div className="page-layout--details">
            <h1 className="page-layout--name">Hack.Diversity React/Redux Template</h1>
            <p className="page-layout--description">
                A simple CRUD app built using the&nbsp;
                <a href="https://www.educative.io/edpresso/what-is-mern-stack" target="_blank" rel="noopener noreferrer">MERN&nbsp;tech-stack</a>.
            </p>
        </div>
        <Logo />
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    </div>

export default PageLayout;
