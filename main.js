const cheerio = require('cheerio');
const axios = require('axios')
const process = require('process');
const fs = require('node:fs/promises');
// 0 add fs from file system
// 0 add process from file system

const processRoute = process.argv[2]

const testURL = 'http://webcode.me'
const gutenbergURL = 'https://www.gutenberg.org/cache/epub/64317/pg64317-images.html'

// # - separate helper functions to a separate module
    // cheerio processing -> one version for analyzing, another for scraping
    // make request -> specify url as an argument
    // fs async read and write


//2 - set up separate versions for scraping and analyzing
function cheerioScraping(data) {
    const $ = cheerio.load(data.data)
    // do stuff in here

    const title = $('title').text()
    const $ch1=$('#chapter-1 > p').text();

    return $ch1
}

function cheerioAnalyzing(data) {
    const $ = cheerio.load(data.data)
    // do stuff in here

    const title = $('title').text()
    const $ch1=$('#chapter-1 > p').text();

    return $ch1
}

async function makeRequest() {

    const config = { //this configures the request to be a GET request
        method: 'get',
        url: gutenbergURL
    }

    try {
        let res = await axios(config)
        return res

    } catch (error) {
        console.error(error)
        return null;
    }
}

// 2 - get scraping working, split out utility functions
async function scrape() {
    try {
        const text = await makeRequest()

        if (text) {
            // consider keeping the scraping and analyzing separate steps?
                // so - download the page and save as an .html file
                // then - open up the html file, process from there?
                // will add an extra step, but would cut down on scraping calls
            // let stuff = cheerioProcessing(text)
            
            let parsedText = cheerioScraping(text)
            // return parsedText

            // add command to write to a new file

            // console.log(stuff)
            // pull h1 text, remove spaces
            // save to an .html file in a separate folder -> ./data/rawHTML/(h1 text without spaces).html
        }
    }
    catch (error){
        console.error(error)
    }
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
    // scrape()
} else if (processRoute=="a") {
    console.log('analyze')
    // analyze()
} else {
    console.log('please indicate a route')
}

