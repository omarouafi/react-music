import React from 'react'
import './player.styles.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'


const Player = ({audioRef,timeStamp,setTimeState,isPlaying,setisPlaying}) => {
    
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


    const handleDrag = e => {
        const {value} = e.target
        audioRef.current.currentTime=value
        setTimeState({...timeStamp,currentTime:value})
    }

    const {currentTime,duration} = timeStamp

    return(

        <div className="player">
            <div className="time-control">
                <p>{getTime(currentTime)}</p>
                <input onChange={handleDrag} min={0} max={duration} value={currentTime} type="range"/>
                <p>{getTime(duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="play-control__play" size="2x" icon={faAngleLeft}/>
                <div className="play-icon">
                    <FontAwesomeIcon onClick={handlePlay} className="play-control__play" size="2x" icon={isPlaying?faPause:faPlay}/>
                </div>
                <FontAwesomeIcon className="play-control__play" size="2x" icon={faAngleRight}/>
            </div>
        </div>
)}

export default Player