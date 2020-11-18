import express from 'express'
import fetch from 'node-fetch'

import { promises as fs } from 'fs'

const { readFile, writeFile } = fs

//import getPodcastModel from '../../model/getPodcastModel'


const app = express()

   

  const getPodcastDetails = async (res, req)=> {
       const podcast= [{
        title: String,
        date: String,
        description: String,
        sound: String,
        time: String,
    }] 
        let detail
        let content
        const url = `https://podcasts.google.com/feed/aHR0cHM6Ly9qb3ZlbW5lcmQuY29tLmJyL2ZlZWQtbmVyZGNhc3Qv`
         
        try {
           
            const response = await fetch(url)
                        
            if (response.ok)
                //content = await response.text()
                getHtml(await response.text())
        } catch (err) {

            return
        }
        
        //getHtml(content)

        function getTitle(content) {
            const startSearch = `<div class="${("OTz6ee" || "LrApYe")}" role="presentation">`
            const endSearch = '</div>'
            let currentPosition = content.indexOf(startSearch)

            if (currentPosition < 0) return
            detail = content.substr(currentPosition + (startSearch.length))
            currentPosition = detail.indexOf(endSearch)

            if (currentPosition < 0) return

            detail = detail.substr(0,
                detail.length - (detail.length - currentPosition)
            )
            return detail

        }

        function getDescription(content) {
            const startSearch = '<div class="LrApYe" role="presentation">'
            const endSearch = '</div>'
            let currentPosition = content.indexOf(startSearch)

            if (currentPosition < 0) return
            detail = content.substr(currentPosition + (startSearch.length))
            currentPosition = detail.indexOf(endSearch)

            if (currentPosition < 0) return

            detail = detail.substr(0,
                detail.length - (detail.length - currentPosition)
            )
            return detail

        }

        function getDate(content) {
            const startSearch = '<div class="e3ZUqe" role="presentation">'
            const endSearch = '</div></div><div class="LrApYe" role="presentation">'
            let currentPosition = content.indexOf(startSearch)

            if (currentPosition < 0) return
            detail = content.substr(currentPosition + (startSearch.length))
            currentPosition = detail.indexOf(endSearch)

            if (currentPosition < 0) return

            detail = detail.substr(0,
                detail.length - (detail.length - currentPosition)
            )
            return detail

        }

        function getSound(content) {
            const startSearch = 'jsdata="Kwyn5e;'
            const endSearch = ';'
            let currentPosition = content.indexOf(startSearch)

            if (currentPosition < 0) return
            detail = content.substr(currentPosition + (startSearch.length))
            currentPosition = detail.indexOf(endSearch)

            if (currentPosition < 0) return

            detail = detail.substr(0,
                detail.length - (detail.length - currentPosition)
            )
            return detail
        }

        function getTime(content) {
            const startSearch = '<span class="gUJ0Wc">'
            const endSearch = '</span>'
            let currentPosition = content.indexOf(startSearch)

            if (currentPosition < 0) return
            detail = content.substr(currentPosition + (startSearch.length))
            currentPosition = detail.indexOf(endSearch)

            if (currentPosition < 0) return

            detail = detail.substr(0,
                detail.length - (detail.length - currentPosition)
            )
            return detail
        }

       async function getHtml(content) {


            
            let splitHtml = content.split('<div class="oD3fme" style="" jsname="vuEe0c" role="navigation" tabindex="0">')
            

            splitHtml.forEach(data => {
                const title = getTitle(data)
                const date = getDate(data)
                const description = getDescription(data)
                const sound = getSound(data)
                const time = getTime(data)

                podcast.push({ title, date, description, sound, time })

            })
              //console.log(podcast)
           
        }
        // return podcastDetails

           try {
                
                   await writeFile(global.podcastAPI, JSON.stringify(podcast)) 
              } catch (error) {
                  console.log(error)
              } 
       
    }


 
  

        
       

export default{ getPodcastDetails}




