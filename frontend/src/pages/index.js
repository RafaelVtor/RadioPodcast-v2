import React from 'react'
import ReactDOM from 'react-dom'




import { useState ,useEffect } from 'react'

import Head from 'next/head';

export default function index() {

    const [imagePodcast, setImagePodcast] = useState([])
    const [range, setRange] = useState([])

    useEffect(()=>{
        window.addEventListener('load', () => {
            
            let mhz = document.querySelector('#mhz')
            let frequency = document.querySelector('#frequency')
            let description = document.querySelector('.description')
            let podcastImage = document.querySelector('.podcastImage')
            
            frequency.addEventListener('input', searchChannels)
            
            let podcastChannels = podcast.map(channel => {
                return {
                    name: channel.name,
                    image: channel.image,            
                    frequency: channel.frequency,
                    description: channel.description,
                }
            })
            
            function searchChannels() {
                console.log(frequency.value)
                
                podcastChannels.forEach(channel => {
                    if (channel.frequency === frequency.value) {
                        mhz.innerText = `${channel.frequency}`
                        setRange(`${channel.frequency}`)
                        
                       
                        setImagePodcast(`${channel.image}`)
                        
                        
                        podcastImage.style.backgroundImage = `./img/${channel.image}.jpg`
                        description.textContent = channel.description
                        
                    }
                })
            }
            
        })
    })
    

    return (
                <div>
                    <Head>
                        <title>Rádio Podcast</title>                       
                    </Head>
           
                    <h2 className="nameRadio">Rádio Podcast</h2>
                    <div className="container">
                        <p id="mhz">87,8 MHz</p>
                        <input type="range" name="frequency" id="frequency" min="87.8" max="108" value={range} step="0.1"></input>
                        <img className="podcastImage" src={`https://raw.githubusercontent.com/RafaelVtor/RadioPodcast/master/img/${imagePodcast}.jpg`}></img>
                        <legend className="description"></legend>
                    </div>
                     <script type="text/javascript" src="../js/script.js" ></script>
                </div>
                         

    )
}

