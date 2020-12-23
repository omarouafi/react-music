import React from 'react'
import './song.styles.scss'


const Song = ({name,cover,artist,isPlaying}) => {
    
    
    const handleLoad = e => {
        console.log(e.target);
    }

    return(
    <div className="song-container">
        <img className={`${isPlaying?"":""}`} src={cover} alt=""/>
        <h2 className="name">{name}</h2>
        <div className="artist">{artist}</div>
    </div>
)}

export default Song