const process = require('process');
const utility = require('./scripts/utility')
const path = require('node:path');

const processRoute = process.argv[2]
const analyzeFileName = process.argv[3]
const analyzeFilePath = `./data/rawHTML/${analyzeFileName}`

const scrapeURL = 'https://webcode.me/'

if (processRoute=="s"){
    console.log('scrape')
    utility.scrape(scrapeURL)
} else if (processRoute=="a") {
    console.log('analyze')
    utility.analyze(analyzeFilePath)
} else if (processRoute=="a-test") {
    console.log('testing')
    utility.analyzeTest(analyzeFilePath)
}
else {
    console.log('please indicate a route')
}