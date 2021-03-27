import { Howl, Howler } from 'howler'
import React, { useContext, useEffect, useState } from 'react'


import { PodcastContext } from '../contexts/PodcastContext'
import styles from '../css/components/ControlsPlayer.module.css'

export default function controlsPlayer() {

    const {podcastAtributes, putToListen,listenNow} = useContext(PodcastContext)

    const [audio, setAudio] = useState({})
    const [volume, setVolume] = useState(0.5)
    const [positionAudio, setPositionAudio] = useState()
    const [duration, setDuration] = useState(0)
    
    const [audioInterval, setAudioInterval] = useState(0)
    const [audioIntervalInMinutes, setAudioIntervalInMinutes] = useState(0)

    const [isPlayButton, setIsPlayButton] = useState()
    const [hasDuration, setHasDuration] = useState(false)

    const {sound, index} = listenNow


    useEffect(()=>{
        
        setAudio(new Howl({
        src:sound,
        preload:true,        
        buffer:true,
        autoplay: false,
        html5:true,
        volume:volume    
        
    }))

    setTimeout(setHasDuration(true),2000)
    
    setIsPlayButton(false) 
    
       
        
    },[sound])   

    useEffect(()=>{
        setDuration((audio._duration / 60).toFixed(2))
        console.log((audio._duration / 60).toFixed(2))
        console.log(duration)
    }, [hasDuration])

    useEffect(()=>{
        setAudioIntervalInMinutes((audioInterval.toFixed(0) / 60).toFixed(2))
        setPositionAudio((audioInterval.toFixed(0) / 60).toFixed(2))

        console.log(audio._sounds._node.currentTime)
        
    },[audioInterval])


   
    const isPlay = () =>{
        setAudioInterval(audio.seek())        
        console.log("audio :"+audio.seek())
        
    }
   
    
    const startPodcast=()=>{        
        setIsPlayButton(!isPlayButton)        
        audio.play()
        setHasDuration(false)
        console.log(audio)
        setInterval(isPlay, 1000)
   }    
 
    const pausePodcast=()=>{
        
        audio.pause()
        setIsPlayButton(!isPlayButton)   
        clearInterval(isPlay)
        
    }

    const changeVolume=(event)=>{
        
        setVolume(event.target.value)
        audio.volume(event.target.value)        
        
    }

    const previousAudio=()=>{
        audio.stop()        
        setIsPlayButton(false)
        podcastAtributes.map(({date, description, time, title, sound}, indexContent)=>{
            if( ( index - 1 ) === indexContent){
                putToListen({date, description, time, title, sound}, indexContent)
            }
        })
    }
    
    const nextAudio=()=>{
        audio.stop()

        setIsPlayButton(false)
        podcastAtributes.map(({date, description, time, title, sound}, indexContent)=>{
            if( ( index + 1 ) === indexContent){
                putToListen({date, description, time, title, sound}, indexContent)
            }
        })
        audio.seek(0)
    }

    const changeInterval =(event)=>{
        audio.seek(((event.target.value)* 60))
        setPositionAudio(event.target.value)
        
    }
    

    return (
        <div>
            
            <input className={styles.timeRange} type="range" 
                value={positionAudio} 
                max={(audio._duration / 60).toFixed(2)}
                onChange={changeInterval}   
                step='0.1'             
            ></input>
            <div className={styles.buttonContent}>
                <button className={styles.bottonPrevious} onClick={previousAudio}>Antes</button>
                {isPlayButton ?     
                    <button className={styles.bottonPlay} onClick={pausePodcast} >Pause</button>
                    :
                    <button className={styles.bottonPlay} onClick={startPodcast} >Play</button>
                }
                <button className={styles.bottonNext} onClick={nextAudio}>Depois</button>                     
                <input className={styles.volume} type="range" onChange={changeVolume} value={volume} step='0.05' max='1' min='0'></input>
            </div>

              
              
        </div>
    )
}
