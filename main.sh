#! /bin/bash

# update these as needed
rawHTML="Poem-.html"
scrapedText="O!Ble.txt"
url="https://poets.org/poem-a-day"

if [ "$1" = "c" ] 
then
    npm run clean $scrapedText
elif [ "$1" = "ct" ]
then
    npm run cleantest $scrapedText
elif [ "$1" = "s" ]
then
    npm run scrape $url
elif [ "$1" = "a" ]
then
    npm run analyze $rawHTML
elif [ "$1" = "at" ]
then
    npm run analyzetest $rawHTML
elif [ "$1" = "i" ]
then
    npm run init
else
    echo "Please indicate a valid route."
fi