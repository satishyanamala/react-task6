import React from 'react';

const AppItem = ({ app }) => {
  return (
    <li className="app-item">
      <img src={app.imageUrl} alt={app.appName} className="app-icon" />
      <p>{app.appName}</p>
    </li>
  );
};

export default AppItem;
