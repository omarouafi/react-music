import React from 'react'
import './player.styles.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'


const Player = ({songs,currentSong,setCurrentSong,audioRef,timeStamp,setTimeState,isPlaying,setisPlaying}) => {
    
    const handlePlay = e => {
        if (isPlaying) {
            audioRef.current.pause()
            setisPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setisPlaying(!isPlaying)
        }
    }

   
    const getTime = (time) => {
        let seconds = Math.floor(time%60)+""
        seconds = seconds.length === 1 ? `0${seconds}`:seconds
        return Math.floor(time/60) + ":" + seconds
    }


    const handleSkip = (skip) => {
        const Currentindex = songs.findIndex(song=>song.id === currentSong.id)
        if (skip === "+") {
            setCurrentSong(songs[(Currentindex+1)%songs.length])
        }else{
            Currentindex === 0? setCurrentSong(songs[songs.length-1]) :setCurrentSong(songs[Currentindex-1])

        }
    }


    const handleDrag = e => {
        const {value} = e.target
        audioRef.current.currentTime=value
        setTimeState({...timeStamp,currentTime:value})
    }

    const {currentTime,duration,progress} = timeStamp

    return(

        <div className="player">
            <div className="time-control">
                <p>{getTime(currentTime)}</p>
                <div className="track" style={{backgroundImage:`linear-gradient(90deg,${currentSong.colors[0]},${currentSong.colors[1]})`}}>
                    <input onChange={handleDrag} min={0} max={duration || 0} value={currentTime} type="range"/>
                    <div style={{transform:`translateX(${progress}%)`}} className="animated-track"></div>
                </div>
                <p>{getTime(duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={handleSkip} className="play-control__play" size="2x" icon={faAngleLeft}/>
                
                    <FontAwesomeIcon onClick={handlePlay} className="play-control__play" size="2x" icon={isPlaying?faPause:faPlay}/>
                   
                
                <FontAwesomeIcon onClick={ () =>  handleSkip("+")} className="play-control__play" size="2x" icon={faAngleRight}/>
            </div>
        </div>
)}

export default Player