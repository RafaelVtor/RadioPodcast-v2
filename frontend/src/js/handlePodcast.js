

const podcastDetails = {
    podcast: [{
        title: String,
        date: String,
        description: String,
        sound: String,
        time: String,
    }],
    namePodcast: '',
    detail: '',

    async handlePodcast() {
        let content
        const url = `http://localhost:3333/`

        try {
            let response = await fetch(url)

            if (response.ok)
                content = await response.json()
              //  console.log(content)
                return content
        } catch (err) {

            return
        }

       
        // return podcastDetails
        // console.log(podcastDetails)
    }
}



export default podcastDetails