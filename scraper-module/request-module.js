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
async function sendurlrequestStatic2 (url,blockElement){  //Needs testing
  try{
    let content = await rp(url)

    let results = await scrape(content,blockElement)//pass the HTML content to cheerio to be scraped 
    return await results; //return the results form cheerio;
  }catch(err){
    throw new Error(err.message)
  }
}

async function sendurlrequestDynamic2 (url,blockElement){
  try{
    let browser = await puppeteer.launch(); //launch puppeteer browser
    let page = await browser.newPage(); //open a new page in the browser
    await page.goto(url); //go to the given url from the params
    let content = await page.content(); //save the contents of the page
    await browser.close(); //close thr browser instance after we are done
    let results = await scrape(content,blockElement)//pass the HTML content to cheerio to be scraped 
    return await results; //return the results form cheerio;
  }catch(err){
    throw new Error(err.message); //catch and pass on any error messages
  }
}

async function scrape (html,blockElement){
  let resultsArray = [] 
  await $(blockElement, html).each(function() {
    resultsArray.push($(this).text());
    //console.log($(this).text());
  });
  return await resultsArray
}
//Export module
// =============================================================================
module.exports = {sendurlrequestStatic2,sendurlrequestDynamic2,scrape};