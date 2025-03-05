const cheerio = require('cheerio');

function cheerioScraping(data) {
    const $ = cheerio.load(data.data)
    // do stuff in here -> pull title and stuiff, save to an array, use title in name of doc

    const title = cleanText($('title').text(),5)

    return title
}

function cheerioAnalyzing(data) {
    // refine this plz
    const $ = cheerio.load(data)
    // do stuff in here
    let tempArray = []

    const title = $('title').text()
    const stuff = $('.poem__body > .field--body p>span').text().toString()

    tempArray.push(stuff)
    tempArray.push(title)

    return tempArray
}

function cleanText(text, length) {
    return text.replace(/\s+/g, '').substring(0,length)
}

module.exports = { cheerioScraping, cheerioAnalyzing, cleanText }