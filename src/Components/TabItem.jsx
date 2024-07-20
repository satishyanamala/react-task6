import React from 'react';

const TabItem = ({ tab, isActive, onClickTab }) => {
  const activeTabClass = isActive ? 'active-tab' : '';

  const onClick = () => {
    onClickTab(tab.tabId);
  };

  return (
    <li className={`tab-item ${activeTabClass}`} onClick={onClick}>
      {tab.displayText}
    </li>
  );
};

export default TabItem;
