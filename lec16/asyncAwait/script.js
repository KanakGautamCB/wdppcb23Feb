let url ='https://meowfacts.herokuapp.com/?count=3'

async function getData(){

    try {
        let response = await fetch(url)
    
        let data = await response.json()
    
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

getData()