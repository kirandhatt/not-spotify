// App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import Navbar from './components/NavBar/NavBar';
import Playback from './components/Playback/Playback';

function App() {
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get (`/api/tracks/search?query=${query}`);
            setTracks(response.data);
        } catch (error) {
            console.error ('Error searching tracks:', error);
        }
    }

  return (
    <>
    <header>
        <Navbar />
    </header>
    <main>
        <h1>SoundCloud Track Search</h1>
        <form onSubmit={handleSearch}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search for a song...'/>
            <button type='submit'>Search</button>
        </form>
        <div>
            {tracks.map((track) => (
                <div key={track.id}>
                    <h3>{track.title}</h3>
                    <p>{track.description}</p>
                </div>
            ))}
        </div>
    </main>
    <footer>
        <Playback />
    </footer> 
    </>
  );
}

export default App;
