const axios = require('axios')
const fs = require('node:fs/promises');
const cheerioUtility = require('./cheerio-utility')

async function makeRequest(link) {

    const config = { //this configures the request to be a GET request
        method: 'get',
        url: link
    }

    try {
        let res = await axios(config)
        return res

    } catch (error) {
        console.error(error)
        return null;
    }
}

async function scrape(link) {
    try {
        const text = await makeRequest(link)

        if (text) {
            let parsedTitle = cheerioUtility.cheerioScraping(text)
            await fs.writeFile(`./data/rawHTML/${parsedTitle}`, text.data);
        }
    }
    catch (error){
        console.error(error)
    }
}


module.exports = { makeRequest, scrape}