import React, { createContext, useEffect, useState } from 'react'

import styles from '../css/contexts/PodcastContext.module.css'

export const PodcastContext = createContext()

export default function GetPodcast({children}) {
    
    
    
    const [podcastAtributes, setPodcastAtributes] = useState([Array])
    
    useEffect(()=>{
        try {
            fetch('http://localhost:3333/')
            .then((response)=>{                
                response.json().then((res)=>{                    
                        setPodcastAtributes(res)                    
                })
            })            
        } catch (error) {
            console.log(error)
        }
    }, [])
     
    
    return (
        <PodcastContext.Provider value={podcastAtributes} className={styles.contentMain}>
            {children}            
        </PodcastContext.Provider>
    )
}
