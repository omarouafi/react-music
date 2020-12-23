import React,{useState,useRef,useEffect} from 'react'
import songsData from './utils/songs'
import Song from './components/song/song.component'
import Player from './components/player/player.component'
import Library from './components/Library/library.component'
import './app.scss'
import Nav from './components/Nav/nav.component'

  function App() {


    
    const audioRef = useRef(null)
    const [timeStamp,setTimeState] = useState({
        duration:0,
        currentTime:0,
        progress:0
    })


    const handleTimeChange = e => {
      const {currentTime,duration} = e.target
      const progress =  currentTime/duration*100
      setTimeState({currentTime,duration,progress})

      if (progress === 100) {
        const currentSongIndex = songs.findIndex(song=>song.id === currentSong.id)
        setCurrentSong(songs[(currentSongIndex+1)%songs.length])
      }
  }
  
  const [songs,setSongs] = useState(songsData)
  const [currentSong,setCurrentSong] = useState(songsData[0])
  const [isPlaying,setisPlaying] = useState(false)
  const [libraryHidden,setLibraryToggle] = useState(true)
  useEffect(()=>{

  if (isPlaying) {
    const playPromise = audioRef.current.play();
    playPromise.then(()=>audioRef.current.play())
  }

    const filteredSongsArray = songs.map(el=> {
      if (el.name === currentSong.name ) {
        
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

       
       

  setSongs(filteredSongsArray)
  },[currentSong])

  return (
    <div className={ `App ${libraryHidden ? '':'collapse'}` }>
      <Nav setLibraryToggle={setLibraryToggle} libraryHidden={libraryHidden} />
      <Song isPlaying={isPlaying}  setisPlaying={setisPlaying} {...currentSong}/>
      <Player  songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} timeStamp={timeStamp}  audioRef={audioRef}  setTimeState={setTimeState}  isPlaying={isPlaying} setisPlaying={setisPlaying} {...currentSong}/>
      <Library audioRef={audioRef}  libraryHidden={libraryHidden} setSongs={setSongs} songs={songs} currentSong={currentSong} setisPlaying={setisPlaying} isPlaying={isPlaying} setCurrentSong={setCurrentSong}  />
      <audio onLoadedMetadata={handleTimeChange} onTimeUpdate={handleTimeChange} ref={audioRef} src={currentSong.source}></audio>

    </div>
  );
}

export default App;
