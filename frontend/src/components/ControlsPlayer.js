import React, { useContext, useEffect, useRef, useState } from 'react'

import { PodcastContext } from '../contexts/PodcastContext'
import styles from '../css/components/ControlsPlayer.module.css'

export default function controlsPlayer() {

    const {podcastAtributes, putToListen,listenNow} = useContext(PodcastContext)

    const [audioElement, setAudioElemente] = useState()
    const [volumeValue, setVolume] = useState(50)

    const [isPlay, setIsPlay] = useState(false)
    const {sound, index} = listenNow

    
    useEffect(()=>{
        setAudioElemente(new Audio(sound))
        console.log(new Audio)
    },[sound])

    
    
    console.log(audioElement)
    const startPodcast=()=>{        
        audioElement.play()
        setIsPlay(!isPlay)        
    }    

    const pausePodcast=()=>{
        audioElement.pause()
        setIsPlay(!isPlay)         
    }

    const changeVolume=(event)=>{
        console.log(event.target.value)
        setVolume(event.target.value)
        

    }

    const previousAudio=()=>{
        audioElement.pause()
        setIsPlay(!isPlay)
        podcastAtributes.map(({date, description, time, title, sound}, indexContent)=>{
            if( ( index - 1 ) === indexContent){
                putToListen({date, description, time, title, sound}, indexContent)
            }
        })
    }
    
    const nextAudio=()=>{
        audioElement.pause()
        setIsPlay(!isPlay)
        podcastAtributes.map(({date, description, time, title, sound}, indexContent)=>{
            if( ( index + 1 ) === indexContent){
                putToListen({date, description, time, title, sound}, indexContent)
            }
        })
    }
    

    return (
        <div>
            <input className={styles.timeRange} type="range"></input>
            <div className={styles.buttonContent}>
                <button className={styles.bottonPrevious} onClick={previousAudio}>Antes</button>
                {isPlay ?     
                    <button className={styles.bottonPlay} onClick={pausePodcast} >Pause</button>
                    :
                    <button className={styles.bottonPlay} onClick={startPodcast} >Play</button>
                }
                <button className={styles.bottonNext} onClick={nextAudio}>Depois</button>                     
                <input className={styles.volume} type="range" onChange={changeVolume} value={volumeValue} max='100' min='0'></input>
            </div>

              
              
        </div>
    )
}
