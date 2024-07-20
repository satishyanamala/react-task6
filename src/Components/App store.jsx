import React, { useState } from 'react';
import TabItem from './TabItem';
import AppItem from './AppItem';

const AppStore = ({ tabsList, appsList }) => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
  const [searchInput, setSearchInput] = useState('');

  const onClickTab = (tabId) => {
    setActiveTabId(tabId);
    setSearchInput('');
  };

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredApps = appsList.filter(
    (app) =>
      app.category === activeTabId &&
      app.appName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="app-store">
      <h1>App Store</h1>
      <div className="tabs-container">
        {tabsList.map((tab) => (
          <TabItem
            key={tab.tabId}
            tab={tab}
            isActive={tab.tabId === activeTabId}
            onClickTab={onClickTab}
          />
        ))}
      </div>
      <input
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={onChangeSearchInput}
        className="search-input"
      />
      <ul className="apps-container">
        {filteredApps.map((app) => (
          <AppItem key={app.appId} app={app} />
        ))}
      </ul>
    </div>
  );
};

export default AppStore;
