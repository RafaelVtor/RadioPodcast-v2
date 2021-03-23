import React, { useContext } from 'react'
import { PodcastContext } from '../contexts/PodcastContext'

import styles from '../css/components/Painel.module.css'
import ControlsPlayer from './ControlsPlayer'

export default function Painel() {
    const {listenNow, indexSound} = useContext(PodcastContext)
    const {date, description, time, title, sound} = listenNow

    return (
        <div className={styles.painelAudio}>
            <div className={styles.painelAudioContent}>
                <header>
                    <h1>{title}</h1>
                    <strong>{description}</strong>                    
                </header>
              
                <ControlsPlayer/>
                {/* <p>{time} | {date}</p> */}
            </div>
        </div>
    )
}
