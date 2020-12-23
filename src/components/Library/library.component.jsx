import React,{useState} from 'react'
import './library.styles.scss'
import LibrarySong from '../LibrarySong/library-song.component'

class Library extends React.Component  {
    
    constructor(){
        super()
        this.state = {
            filteredSongs:[],
            queryString:''
        }
    }

    componentDidMount(){
        this.setState({filteredSongs:this.props.songs})
       
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState({queryString:value})

    }

    render(){
        const newSongsList = this.props.songs.filter(song => song.name.toLowerCase().includes(this.state.queryString.toLowerCase()))
        const {libraryHidden,setSongs,songs,currentSong,setisPlaying,isPlaying,audioRef,setCurrentSong} = this.props
        return(
            
            <div className={`library ${libraryHidden ? '':'library-active'}`}>
            <h2>Library</h2>
               

            <input onChange={this.handleChange} type="text" placeholder="Search..."/>

            <div className="library-songs">
                {
                   newSongsList.map(song => <LibrarySong setSongs={setSongs} songs={songs} currentSong={currentSong} audioRef={audioRef} isPlaying={isPlaying} setisPlaying={setisPlaying}  setCurrentSong={setCurrentSong} key={song.id} song={song}/> ) 

                }
            </div>
            
        </div>
    )
    }
}

export default Library;