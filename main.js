const process = require('process');
const utility = require('./scripts/utility')

const processRoute = process.argv[2]
const analyzeFileName = process.argv[3]
const analyzeFilePath = `./data/rawHTML/${analyzeFileName}`
const cleanFilePath = `./data/scraped/${analyzeFileName}`

const scrapeURL = 'https://webcode.me/'

if (processRoute=="s"){
    console.log('scraping...')
    utility.scrape(scrapeURL)
} else if (processRoute=="a") {
    console.log('analyzing...')
    utility.analyze(analyzeFilePath)
} else if (processRoute=="a-test") {
    console.log('test analyzing')
    utility.analyzeTest(analyzeFilePath)
} else if (processRoute =="c") {
    console.log('cleaning')
    utility.clean(cleanFilePath)
}else if (processRoute =="c-test") {
    console.log('test cleaning')
    utility.cleanTest(cleanFilePath)
}
else {
    console.log('please indicate a route')
}