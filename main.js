const cheerio = require('cheerio');
const axios = require('axios')
const process = require('process');
const fs = require('node:fs/promises');
const utility = require('./scripts/utility')
const cheerioUtility = require('./scripts/cheerio-utility')

const processRoute = process.argv[2]

const testURL = 'http://webcode.me'
const gutenbergURL = 'https://www.gutenberg.org/cache/epub/64317/pg64317-images.html'

// # - separate helper functions to a separate module
    // cheerio processing -> one version for analyzing, another for scraping
    // make request -> specify url as an argument
    // fs async read and write


//2 - set up separate versions for scraping and analyzing
function cheerioAnalyzing(data) {
    const $ = cheerio.load(data.data)
    // do stuff in here
    let tempArray = []

    const title = $('title').text()
    const $ch1=$('#chapter-1 > p').text();

    tempArray.push(title)
    tempArray.push($ch1)

    return tempArray
}



//3 - get analyze working, split out utility functions
async function analyze() {
    // add read command
    // add write command
    // add cheerio command    
    try {
        // load html file from ./rawHTML/
        // extract data
        // save to another file in ./data/extracted/
    } 
    catch (error){
        console.error(error)
    }
}


if (processRoute=="s"){
    console.log('scrape')
    utility.scrape(testURL)
} else if (processRoute=="a") {
    console.log('analyze')
    // analyze()
} else {
    console.log('please indicate a route')
}

