const cheerio = require('cheerio');

function cheerioScraping(data) {
    const $ = cheerio.load(data.data)
    // do stuff in here -> pull title and stuiff, save to an array, use title in name of doc
    // refine - maybe just pull body and title?
    const title = cleanTextSpaceLength($('title').text(),5)


    return title
}

function cheerioAnalyzing(data) {
    // refine this plz
    const $ = cheerio.load(data)
    // do stuff in here
    let tempArray = []

    const title = $('title').text()
    console.log('within ch analyze after title ', title)
    const stuff = cleanTextSpaces($('.poem__body > .field--body p>span').text().toString())
    console.log('within ch analyze after title ', title)
    tempArray.push(stuff)
    tempArray.push(title)

    return tempArray
}

function regexReplace(inString,regex,index){
    let returnString = ""
    for (let i = index; i < inString.length-1; i=i+2) {
        let testStr = `${inString[i]}${inString[i+1]}`
        if (regex.test(testStr)==true){
            returnString += `${inString[i]} ${inString[i+1]}`
        } else {
            returnString += `${inString[i]}${inString[i+1]}`
        }
    }
    return returnString
}


function cleanTextSpaceLength(text, length) {
    return text.replace(/\s+/g, '').substring(0,length)
}

function cleanTextSpaces(text){
    let tempString = text.replace(/\n/g, ' ').replace(/\s{2,}/g, ' ')
    let loopStringA = "";
    let loopStringB  = "";
    let loopStringC  = "";
    let loopStringD = "";
    let lastChar = tempString[tempString.length-1]

    const patternFW = /[!"#$%—&'*+,\.\/:;<=>?@[\]^_`|~][a-zA-Z]/gi
    const patternBW = /[a-zA-Z]["#$%&'*+\/<(=>@[\]^_`|~]/gi

    loopStringA = regexReplace(tempString, patternFW,0) + lastChar
    loopStringB += loopStringA[0]
    loopStringB += regexReplace(loopStringA, patternFW,1) 
    loopStringC += regexReplace(loopStringB, patternBW,0) + lastChar
    loopStringD += loopStringC[0]
    loopStringD += regexReplace(loopStringC, patternBW,1) 

    return loopStringD
}

module.exports = { cheerioScraping, cheerioAnalyzing, cleanTextSpaceLength, cleanTextSpaces }