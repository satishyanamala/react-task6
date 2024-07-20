import React from 'react';
import AppStore from './Components/App store';
import './App.css';

const tabsList = [
  { tabId: 'SOCIAL', displayText: 'Social' },
  { tabId: 'GAMES', displayText: 'Games' },
  { tabId: 'NEWS', displayText: 'News' },
  { tabId: 'FOOD', displayText: 'Food' },
];

const appsList = [
  { appId: 1, appName: 'Facebook', imageUrl: 'http://clipart-library.com/new_gallery/377-3776210_facebook-logo-vector-logovectornet-logo-facebook-2019-png.png', category: 'SOCIAL' },
  { appId: 2, appName: 'Instagram', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.eulu6yGyEU6gNQJW2DIRYAHaEK&pid=Api&P=0&h=180', category: 'SOCIAL' },
  { appId: 3, appName: 'Twitter', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.iFaOYyogDOVsrn7eMegcyAHaHa&pid=Api&P=0&h=180', category: 'SOCIAL' },
  { appId: 4, appName: 'PUBG', imageUrl: 'https://images.hdqwalls.com/download/pubg-mobile-z1-2160x3840.jpg', category: 'GAMES' },
  { appId: 5, appName: 'Clash of Clans', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.XlNSKzO7S88L2-Cun2HwLAHaHa&pid=Api&P=0&h=180', category: 'GAMES' },
  { appId: 6, appName: 'Angry Birds', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.JXMr5dRY71od4QgkaI3-YgHaLH&pid=Api&P=0&h=180', category: 'GAMES' },
  { appId: 7, appName: 'BBC News', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BBC_World_News_2022_(Boxed).svg/1200px-BBC_World_News_2022_(Boxed).svg.png', category: 'NEWS' },
  { appId: 8, appName: 'CNN News', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.QVYRUMsC5vGSBcWAHNN9oQHaHa&pid=Api&P=0&h=180', category: 'NEWS' },
  { appId: 9, appName: 'Food Panda', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.S9SS6FD9iDjWZjtHGkW08gHaDw&pid=Api&P=0&h=180', category: 'FOOD' },
  { appId: 10, appName: 'Zomato', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.2mIA1qLeDb64mbrJdhcGXQHaHa&pid=Api&P=0&h=180', category: 'FOOD' },
];

const App = () => {
  return (
    <div className="app">
      <AppStore tabsList={tabsList} appsList={appsList} />
    </div>
  );
};

export default App;
