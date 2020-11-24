
import { promises as fs } from 'fs'
 
const { readFile } = fs
const path = "./podcastAPI.json"

    const all = async (req, res)=> {
        try {
            
            
            const data = await readFile(path) 
            const teste = JSON.parse(data)
            console.log('API Started')
            console.log(teste) 
            return teste
                
 
        } catch (err) { 
            console.log(err)
        }
   
       
    }
    

export default {all}

 

