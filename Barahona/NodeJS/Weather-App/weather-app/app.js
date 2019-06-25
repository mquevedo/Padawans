const request = require('request')

const url = 'https://api.darksky.net/forecast/cd1c771d3e70c99ee7ca06eaff8d9070/13.66889,-88.86611?units=si'

request({ url: url, json: true}, (error, response) => {
    if (error){
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        const currently = response.body.currently
    console.log(response.body.daily.data[0].summary + ' It is currently ' + currently.temperature + ' degrees out.')
    console.log('There is a ' + currently.precipProbability + '% chance of rain.')
    }
})

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/El%20Salvador.json?access_token=pk.eyJ1Ijoid3JiYXJhaG9uYSIsImEiOiJjanhjOHF3b3AwMHZoM3lxdzJ5YWsxaXpuIn0.5FYP0hgkFrJxRPq4D00jTw'

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the Geocoding service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find the location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }

// })