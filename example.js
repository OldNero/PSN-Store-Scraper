//In your application: let Scraper = require('psn-store-scraper').Scraper;
let Scraper = require('./index.js').Scraper;

let urlArray = [
    "https://store.playstation.com/en-us/product/UP0283-CUSA15243_00-ZOMBIELAND201900"
];

//callback
/* Scraper.scrape(urlArray, function(sObject) {
    console.log(sObject);
}); */

// promise
Scraper.scrape(urlArray).then(result => console.log(result));