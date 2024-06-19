// App.jsx
import React from 'react';
import './App.scss';
import Navbar from './components/NavBar/NavBar';
import Playback from './components/Playback/Playback';

function App() {
  return (
    <>
      <Navbar />
      <Playback />
    </>
  );
}

export default App;
