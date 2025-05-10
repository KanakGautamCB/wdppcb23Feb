let url ='https://meowfacts.herokuapp.com/?count=3'

async function getData(){

    try {
        let response = await axios.get(url)
    
        let data = response.data
    
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

getData()