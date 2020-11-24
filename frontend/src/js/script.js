import React from 'react'


window.addEventListener('load', () => {
        
            
    let mhz = document.querySelector('#mhz')
    let frequency = document.querySelector('#frequency')
    let description = document.querySelector('.description')
    let podcastImage = document.querySelector('.podcastImage')
    
    frequency.addEventListener('input', searchChannels)
    const listDetailsPodcast = podcastDetails.handlePodcast()
    console.log("tesrw"+listDetailsPodcast)
    let podcastChannels =  podcast.map(channel => {
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
                console.log(`./img/${channel.image}.jpg`)
                podcastImage.style.backgroundImage = `url("./img/${channel.image}.jpg")`
                description.textContent = channel.description
                
            }
        })
    }
    
})
