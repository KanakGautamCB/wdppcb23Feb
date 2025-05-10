let key ='ba6e36018320238e19a37bcff3a49adb'
let weatherAPI = (lat,lon,key) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
let geoCodingAPI =  (key,city_name) => `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${key}`


fetch(geoCodingAPI(key,'delhi'))
    .then(data=>data.json())
    .then(data=>{
        fetch(weatherAPI(data[0].lat,data[0].lon,key))
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })