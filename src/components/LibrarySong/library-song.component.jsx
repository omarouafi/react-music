import './library-song.styles.scss'

const LibrarySong = ({setSongs,songs,setCurrentSong,song,audioRef,isPlaying,currentSong}) => {
    const {cover,name,artist} = song

    const handlePlay = (e) => {
        setCurrentSong(song)
        const filteredSongs = songs.map(el=> {
            if (el.id == song.id ) {
                return {
                    ...el,
                    active:true
                }
            }else{
                return {
                    ...el,
                    active:false
                }
            }

            })

        setSongs(filteredSongs)
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            playPromise.then(()=>audioRef.current.play())
        }
    }

    return(
        <div className={`library-song ${song.active ? 'song-active' :''} `} onClick={handlePlay}>
            <img src={cover} alt={name}/>
            <div className="song-info">
                <div className="title">{name}</div>
                <div className="artist">{artist}</div>
            </div>
        </div>
    )
}

export default LibrarySong