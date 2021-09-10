# cmp-scraper
Scraping Consent Management Platform data using puppeteer headless browser

## Getting started

```sh
$ npm install 
```
Set up [MongoDB atlas](https://www.mongodb.com/cloud/atlas) and create a new file in the root directory called config.js

```js
// Replace with you MongoDB connection string
const DbConnectionString = `mongodb+srv://<username>:<password>@...`;
export default DbConnectionString;
```

## Running script

Specify the amount of pages you want to scrape in the script file and run:

```sh
$ node onetrust.js
```
