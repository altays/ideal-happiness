#! /bin/bash

# update these as needed
rawHTML="poemaday.html"
scrapedText="AsKar.txt"
url="https://poets.org/poem-a-day"

if [ "$1" = "c" ] 
then
    echo "cleaning."
    npm run clean $scrapedText
elif [ "$1" = "ct" ]
then
    echo "clean testing."
    npm run cleantest $scrapedText
elif [ "$1" = "s" ]
then
    echo "scraping."
    npm run scrape $url
elif [ "$1" = "a" ]
then
    echo "analyzing."
    npm run analyze $rawHTML
elif [ "$1" = "at" ]
then
    echo "analze testing."
    npm run analyzetest $rawHTML
elif [ "$1" = "i" ]
then
    echo "initializing."
    npm run init
else
    echo "Please indicate a valid route."
fi