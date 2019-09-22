/**
 * Checklist
 * =============================================================================
 * update the list of urls to scrape
 */

// BASE SETUP
// =============================================================================
// Add the required system Packages
const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const fr = require('../support_modules/filereader.js');

//CONFIG FILES
// =============================================================================
const urlConfigFile = './config/urlconfig.json'; // file containing the urls to scrape
dynamic_url = "https://www.reddit.com" //remove
static_url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States" //remove

//Configuring custom logger
//==============================================================================


// Support Methods
// =============================================================================

//Scrapes static web pages
//requires a static url and the tag expression to filter by
this.sendurlrequestStatic = function (){
  rp(static_url)
  .then(function(html){
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    console.log(wikiUrls);
  })
  .catch(function(err){
    //handle error
  });
}

//Scrapes Dynamic webpages
//requires a dynamic url and the tag expression to filter by
this.sendurlrequestDynamic = function(){
  puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(dynamic_url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('h3', html).each(function() {
      console.log($(this).text());
    });
  })
  .catch(function(err) {
    //handle error
  });
}

function webScraper(){

  //init a results array to store app the processed info

  //Logic to iterate through the config file and scrape all the sites using the appropriate methods

  //pass each into an appropriate function

  //process the URLS and then add them into an array to be sent to the database.
}

//new methods
// =============================================================================
async function sendurlrequestStatic2 (url,blockEmelent){  //Needs testing
  return await rp(url).then(function(html){
    const resultsUrls = [];
    for (let i = 0; i < 45; i++) {
      resultsUrls.push($('big > a', html)[i].attribs.href);
    }
    return(resultsUrls);
  },(err)=>{return(err)}
  ).catch((err)=> {throw new Error(err.message)})
}

async function sendurlrequestDynamic2 (url,blockEmelent){
  return await puppeteer.launch()
}

//Export module
// =============================================================================
module.exports = {sendurlrequestStatic2,sendurlrequestDynamic2};