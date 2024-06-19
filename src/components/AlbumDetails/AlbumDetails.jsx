// components/AlbumDetails/AlbumDetails.jsx
import React from 'react';
import './AlbumDetails.scss';

function AlbumDetails({ album }) {
    return (
        <section className="album-details">
            <div className="album-details__art">
                <img src={album.artUrl} alt={`${album.title} cover`} />
            </div>
            <div className="album-details__info">
                <h2 className="album-details__title">{album.title}</h2>
                <p className="album-details__artist">{album.artist}</p>
                <ul className="album-details__tracks">
                    {album.tracks.map((track, index) => (
                        <li key={index} className="album-details__track">
                            {track}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default AlbumDetails;
