import React, { useContext, useEffect, useState } from 'react'
import styles from '../css/components/PlaylistPodcast.module.css'
import { PodcastContext } from '../contexts/PodcastContext'

export default function playlistPodcast() {
    
    const {podcastAtributes, putToListen, listenNow} = useContext(PodcastContext)
    
  
    const indexAudioNow = listenNow.index
            
    const [podcastList, setPodcastList] = useState([])   
    
    useEffect(()=>{        
           setPodcastList(podcastAtributes)        
    },[podcastAtributes])
    
    return ( 
        <div className={styles.container}>
            
            {podcastList.map(({date, description, time, title, sound}, index)=>{
                
                return(
                    
                    <div >
                        <button className={index===indexAudioNow ? styles.detailsSelected : styles.detailsNoSelected} key={index} type="submit" onClick={()=>putToListen({date, description, time, title, sound}, index)}>
                        <h1>
                            <strong>
                             {title}
                            </strong>
                        </h1>
                        <p>{time} - {date}</p>                            
                        </button>
                    </div>                    
                )
            })}
        
        </div>        
    )
}
  