const cheerio = require('cheerio');

function cheerioScraping(data) {
    const $ = cheerio.load(data.data)
    // do stuff in here -> pull title and stuiff, save to an array, use title in name of doc

    const title = $('title').text()

    return title
}

module.exports = { cheerioScraping }