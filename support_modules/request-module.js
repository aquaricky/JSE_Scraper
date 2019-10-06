/**
 * Info
 * =============================================================================
 * module responsible for scraping web pages and returning a string array with the required information.
 */

// BASE SETUP
// =============================================================================
// Add the required system Packages
const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');

//Configuring custom logger
//==============================================================================

// Methods
// =============================================================================

//Method to scrapes a static webpage. Requires a URL and the blockElement Tags to search for based on cheerio's documentation
async function sendurlrequestStatic (url,blockElement){  
  try{
    let content = await rp(url)

    let results = await scrape(content,blockElement)//pass the HTML content to cheerio to be scraped 
    return await results; //return the string array from cheerio;
  }catch(err){
    throw new Error(err.message)//throws an error if any issue occurs
  }
}

//Method to scrape dynamicly generated webpages. Still requires a url and the blockElement Tags to search for based on cheerio's documentation
async function sendurlrequestDynamic (url,blockElement){
  try{
    let browser = await puppeteer.launch(); //launch puppeteer browser
    let page = await browser.newPage(); //open a new page in the browser
    await page.goto(url); //go to the given url from the params
    let content = await page.content(); //save the contents of the page
    await browser.close(); //close the browser instance after we are done
    let results = await scrape(content,blockElement)//pass the HTML content to cheerio to be scraped 
    return await results; //return the string array from cheerio;
  }catch(err){
    throw new Error(err.message); //catch and pass on any error messages
  }
}

//Method to scrape an html document using cheerio. requires the page's html as well as the blockElement tags to search for.
async function scrape (html,blockElement){
  let resultsArray = [] //create a results array to store the list of elements found
  await $(blockElement, html).each(function() {//searches for all occurances of the block element with the html then iterates through them.
    resultsArray.push($(this).text()); //gets the text found in this block tag and then pushes it to the results array
  });
  return await resultsArray //returns the results 
}

async function makeRequest (url,blockElement,type){
 try{
   if(type == 'DYNAMIC') {
     return await sendurlrequestDynamic(url, blockElement);
   }else
   if(type == 'STATIC'){
    return await sendurlrequestStatic(url, blockElement);
   }
 }catch(err){
   return await resultsArray //returns the results
 }
}

//Export module
// =============================================================================
module.exports = {makeRequest};