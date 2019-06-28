const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/cd1c771d3e70c99ee7ca06eaff8d9070/' + encodeURIComponent(long) + ',' + encodeURIComponent(lat) + '?units=si'

    request({ url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback ( undefined ,{
                ConditionAndTemperature: response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.',
                precipitationProbability: 'There is a ' + response.body.currently.precipProbability + '% chance of rain.'
            })
        }
    })
}

module.exports = forecast

