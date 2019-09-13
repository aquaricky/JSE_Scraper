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

//list various URLs to scrape .. try and move this to a config file.
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

//Configuring custom logger
//==============================================================================


// Support Methods
// =============================================================================

//Provides the raw html of the webpage.
this.sendurlrequest = function (){
  rp(url)
  .then(function(html){
    //success!
    console.log($('big > a', html).length);
    console.log($('big > a', html));
  })
  .catch(function(err){
    //handle error
  });
}