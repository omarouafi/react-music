import React,{useState,useRef} from 'react'
import songsData from './utils/songs'
import Song from './components/song/song.component'
import Player from './components/player/player.component'
import Library from './components/Library/library.component'
import './app.scss'

  function App() {


    const audioRef = useRef(null)
    const [timeStamp,setTimeState] = useState({
        duration:0,
        currentTime:0
    })


    const handleTimeChange = e => {
    const {currentTime,duration} = e.target
    setTimeState({currentTime,duration})
  }

  const [songs,setSongs] = useState(songsData)
  const [currentSong,setCurrentSong] = useState(songsData[1])
  const [isPlaying,setisPlaying] = useState(false)

  return (
    <div className="App">
      <Song isPlaying={isPlaying}  setisPlaying={setisPlaying} {...currentSong}/>
      <Player timeStamp={timeStamp}  audioRef={audioRef}  setTimeState={setTimeState}  isPlaying={isPlaying} setisPlaying={setisPlaying} {...currentSong}/>
      <Library audioRef={audioRef} setSongs={setSongs} songs={songs} currentSong={currentSong} setisPlaying={setisPlaying} isPlaying={isPlaying} setCurrentSong={setCurrentSong} songs={songs}  />
      <audio onLoadedMetadata={handleTimeChange} onTimeUpdate={handleTimeChange} ref={audioRef} src={currentSong.source}></audio>

    </div>
  );
}

export default App;
