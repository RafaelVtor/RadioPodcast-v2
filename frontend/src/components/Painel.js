import React, { useContext } from 'react'
import { PodcastContext } from '../contexts/PodcastContext'

import styles from '../css/components/Painel.module.css'

export default function Painel() {
/* const {date, description, sound, time, title} = useContext(PodcastContext) */

    return (
        <div className={styles.painelAudio}>
            <div className={styles.painelAudioContent}>
                <header>
                    <h1>title</h1>
                    <strong>description</strong>
                </header>
                <audio controls src ="https://nerdcast-cdn.jovemnerd.com.br/nerdcast_766_batalha_crossover_9.mp3"/>
                {/* <p>{time} | {date}</p> */}
            </div>
        </div>
    )
}
