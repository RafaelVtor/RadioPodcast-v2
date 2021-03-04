import express from 'express'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import cors from 'cors'
import PodcastController from './src/controller/PodcastController.js'
import GetPodcastInfo from './src/controller/GetPodcastInfo.js'
import GetPodcastModel from './src/controller/GetPodcastModel.js'


import { promises as fs } from 'fs'
 
const { readFile } = fs

global.podcastAPI = './podcastAPI.json'

console.log(PodcastController)
const app = express()

app.use(cors())
app.use(express.json())

//app.get('/', PodcastController.index)
app.get('/', GetPodcastInfo.getPodcastDetails)
app.get('/get', GetPodcastModel.all) 


app.listen(3333, async (req, res)=>{
 
   

})

console.log('Executando raspagem de dados na porta 3333...');


