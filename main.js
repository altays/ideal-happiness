const process = require('process');
const utility = require('./scripts/utility')

const processRoute = process.argv[2]
const inputName = process.argv[3]
const analyzeFilePath = `./data/rawHTML/${inputName}`
const cleanFilePath = `./data/scraped/${inputName}`

if (processRoute=="s"){
    console.log('scraping...')
    utility.scrape(inputName)
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