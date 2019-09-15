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
const fr = require('./support_modules/filereader.js');

//list various URLs to scrape .. try and move this to a config file.
const urlConfigFile = './config/urlconfig.json';

//Configuring custom logger
//==============================================================================


// Support Methods
// =============================================================================

//Scrapes static web pages
//requires a static url and the tag expression to filter by
this.sendurlrequest = function (){
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

this.webScraper(){
  //Logic to iterate through the config file and scrape all the sites using the appropriate methods
}