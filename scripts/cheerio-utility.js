const cheerio = require('cheerio');

function cheerioScraping(data) {
    const $ = cheerio.load(data.data)
    // do stuff in here -> pull title and stuiff, save to an array, use title in name of doc

    const title = $('title').text()

    return title
}

function cheerioAnalyzing(data) {
    // refine this plz
    const $ = cheerio.load(data)
    // do stuff in here
    let tempArray = []

    const title = $('title').text()
    const para = $('p').text()

    // first item is title, second item should be something else (but using the title just to get it to work)
    tempArray.push(title)
    tempArray.push(title)

    return tempArray
}

module.exports = { cheerioScraping, cheerioAnalyzing }