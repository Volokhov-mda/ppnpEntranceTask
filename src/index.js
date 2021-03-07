import React from 'react';
import ReactDOM from 'react-dom';

import "./index.scss";
import "./fonts/fonts.scss";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ProfilePage />
  </React.StrictMode>,
  document.getElementById('root')
);
