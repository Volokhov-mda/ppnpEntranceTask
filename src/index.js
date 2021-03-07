import React from 'react';
import ReactDOM from 'react-dom';

import "./index.scss";
import "./fonts/fonts.scss";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import Footer from "./components/Footer/Footer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ProfilePage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
