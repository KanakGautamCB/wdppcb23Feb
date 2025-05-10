let url ='https://meowfacts.herokuapp.com/?count=3'

let xhr = new XMLHttpRequest()

xhr.open("GET",url)

xhr.onload = (data) =>{

    let res = JSON.parse(data.target.response)
    console.log(res.data)
}

xhr.onerror = (error)=>{
    console.log(error)
}

xhr.send()