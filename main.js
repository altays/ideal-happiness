const cheerio = require('cheerio');
const axios = require('axios')

const testURL = 'http://webcode.me'
const gutenbergURL = 'https://www.gutenberg.org/cache/epub/64317/pg64317-images.html'

// 2 - separate helper functions to a separate module
    // cheerio processing -> one version for analyzing, another for scraping
    // make request -> specify url as an argument
    // fs async read and write


//separate versions for scraping and analyzing
function cheerioProcessing(data) {
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

async function scrape() {
    try {
        const text = await makeRequest()

        if (text) {
            // consider keeping the scraping and analyzing separate steps?
                // so - download the page and save as an .html file
                // then - open up the html file, process from there?
                // will add an extra step, but would cut down on scraping calls
            // let stuff = cheerioProcessing(text)
        
            // console.log(stuff)
            // pull h1 text, remove spaces
            // save to an .html file in a separate folder -> ./data/rawHTML/(h1 text without spaces).html
        }
    }
    catch (error){
        console.error(error)
    }
}

async function analyze() {
    
    try {
        // load html file from ./rawHTML/
        // extract data
        // save to another file in ./data/extracted/
    } 
    catch (error){
        console.error(error)
    }
}


// add some kind of command line arguments -> then bake into package scripts? 
scrape()

analyze()



