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
            await fs.writeFile(`./data/rawHTML/${parsedTitle}.html`, text.data);
        }
    }
    catch (error){
        console.error(error)
    }
}

async function analyze(filePath) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        const analyzedData = cheerioUtility.cheerioAnalyzing(data)
        await fs.writeFile(`./data/scraped/${cheerioUtility.cleanTextSpaceLength(analyzedData[0],5)}.txt`, analyzedData[0]);
    } 
    catch (error){
        console.error(error)
    }
}

async function analyzeTest(filePath) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        const analyzedData = cheerioUtility.cheerioAnalyzing(data)
        console.log(analyzedData[0])

    } 
    catch (error){
        console.error(error)
    }
}

async function clean(filePath) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        const cleanData = cheerioUtility.cleanTextSpaces(data)
        await fs.writeFile(`./data/processed/${cheerioUtility.cleanTextSpaceLength(cleanData,5)}-cleaned.txt`, cleanData);
    } 
    catch (error){
        console.error(error)
    }
}

async function cleanTest(filePath) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        const cleanData = cheerioUtility.cleanTextSpaces(data)
        console.log('cleaned data:\n',cleanData)
    } 
    catch (error){
        console.error(error)
    }
}


module.exports = { makeRequest, scrape, analyze, analyzeTest, clean, cleanTest}