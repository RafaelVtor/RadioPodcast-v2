
import { promises as fs } from 'fs'
 
const { readFile } = fs


    const all = async (req, res)=> {
        
        
        try {
            console.log('object')
            console.log(JSON.parse(await readFile('../../podcastAPI.json')))
             const data = JSON.parse(await readFile(global.podcastAPI))
             res.send(data) 


        } catch (error) {
            
        }
   
       
    }
    

export default {all}

 

