const process = require('process');
const utility = require('./scripts/utility')
const path = require('node:path');

const processRoute = process.argv[2]
const analyzeFileName = process.argv[3]
const analyzeFilePath = path.join('./data/rawHTML',analyzeFileName)

const testURL = 'http://webcode.me'
const gutenbergURL = 'https://www.gutenberg.org/cache/epub/64317/pg64317-images.html'

if (processRoute=="s"){
    console.log('scrape')
    utility.scrape(testURL)
} else if (processRoute=="a") {
    console.log('analyze')
    utility.analyze(analyzeFilePath)
} else {
    console.log('please indicate a route')
}