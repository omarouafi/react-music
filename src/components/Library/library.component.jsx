import React from 'react'
import './library.styles.scss'
import LibrarySong from '../LibrarySong/library-song.component'

const Library = ({setSongs,songs,currentSong,setisPlaying,isPlaying,audioRef,setCurrentSong}) => {
    
    
    return(
        <div className="library">
            <h2>Library</h2>

            <div className="library-songs">
                {
                    songs.map(song => <LibrarySong setSongs={setSongs} songs={songs} currentSong={currentSong} audioRef={audioRef} isPlaying={isPlaying} setisPlaying={setisPlaying}  setCurrentSong={setCurrentSong} key={song.id} song={song}/> ) 

                }
            </div>
            
        </div>
    )
}

export default Library;