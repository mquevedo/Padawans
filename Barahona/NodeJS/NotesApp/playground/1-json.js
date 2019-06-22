const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const info = JSON.parse(dataJSON)

info.name = 'William'
info.age = 19

const infoJSON = JSON.stringify(info)
fs.writeFileSync('1-json.json', infoJSON)