import './library-song.styles.scss'
const LibrarySong = ({setSongs,songs,setCurrentSong,song,audioRef,isPlaying,currentSong}) => {
    const {cover,name,artist} = song

    const handlePlay = (e) => {
        setCurrentSong(song)     
       
    }


    return(
        <div className={`library-song ${song.active ? 'song-active' :''} `} onClick={handlePlay}>
           
                <img  src={`${cover}`} alt={name}/>
           
           
            <div className="song-info">
                <div className="title">{name}</div>
                <div className="artist">{artist}</div>
            </div>
        </div>
    )
}

export default LibrarySong