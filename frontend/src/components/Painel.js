import React, { useContext } from 'react'
import { PodcastContext } from '../contexts/PodcastContext'

export default function Painel() {
    const {date, description, sound, time, title} = useContext(PodcastContext)

    return (
        <div>
            <h1>{title}</h1>
            <strong>{description}</strong>
            <audio controls src ={sound}/>               
            <p>{time} | {date}</p>
        </div>
    )
}
