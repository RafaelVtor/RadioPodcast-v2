import React, { useContext, useEffect, useState } from 'react'
import styles from '../css/components/PlaylistPodcast.module.css'
import { PodcastContext } from '../contexts/PodcastContext'

export default function playlistPodcast() {
    
    const lista = useContext(PodcastContext)
        
    const [podcastList, setPodcastList] = useState([])   
    
    let data = []

    useEffect(()=>{        
           setPodcastList(lista)        
    },[lista])
    
    return ( 
        <div className={styles.container}>
            {podcastList.map(({date, description, time, title, sound})=>{
                
                return(
                    <div className={styles.details}>
                        <h1>
                            <strong>
                             {title}
                            </strong>
                        </h1>
                        <p>{time} - {date}</p>
                    </div>
                )
            })}
        
        </div>        
    )
}
  