Template project for webscraping with axios and cheerio!

# Initializing

Run 'npm run init' to create the data / processed and data / html folders

# Package Scripts

Scrape - will scrape using the url set in the 'scrapeURL' variable and save the html page under data / rawHTML. Uses the title of the webpage as the name of the doc
Analyze - will analyze the file in the next argument (i.e., npm run analyze urfilehere.html) and save the resulting text in data/processed. 
    Go to scripts / cheerio-utility.js and modify the 'cheerioAnalyzing' function to change what is parsed
AnalyzeTest - basically the same as analyze, but will print to the console instead of saving to data / processed (i.e., npm run analyzeTest urfilehere.html)