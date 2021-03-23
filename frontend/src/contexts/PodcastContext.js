import React, { createContext, useEffect, useState } from 'react'

import styles from '../css/contexts/PodcastContext.module.css'

export const PodcastContext = createContext()

export default function GetPodcast({children}) {
    
    
    
    const [podcastAtributes, setPodcastAtributes] = useState([Array])

    const [listenNow, setListenNow] = useState({title:"Busque na playlist!"});
    const [nextIndexSound, setNextIndexSound] = useState(0)
    const [previousIndexSound, setPreviousIndexSound] = useState(0)
    
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

    function putToListen({date, description, time, title, sound}, index){
        
        setListenNow({date, description, time, title, sound, index})      
        setNextIndexSound(index + 1)
        setPreviousIndexSound(index -1)
    }
    
    return (
        <PodcastContext.Provider value={{podcastAtributes,listenNow,nextIndexSound,previousIndexSound,putToListen}} className={styles.contentMain}>
            {children}            
        </PodcastContext.Provider>
    )
}
