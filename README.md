# Template project for webscraping with axios and cheerio!

## Initializing

Run 'npm run init' to create the data / processed and data / html folders

## Using the shell script

Update the sh files with file names

sh main.sh _

* 'i' will set up the data folder structure
* 's' will run the scrape command using the saved url
* 'a' and 'at' will analyze the html file under /rawHTML/. Note that 'a' will save a .txt file under /processed/ wheras 'at' will just print to the console.
* 'c' and 'ct' will clean the .txt file under /processed/. Similar to the 'a' and 'at' commands, 'c' will produce a file and 'ct' will only log it.