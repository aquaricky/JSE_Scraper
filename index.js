/**
 * Checklist
 * =============================================================================
 * 
 */

 //SETTING NODE JS ENVIRONMENT Variables
//==============================================================================

// BASE SETUP
// =============================================================================

// Add the required system Packages
const request_module = require('./scraper-module/request-module.js');

//Load config file or in environment variables using process.env.PORT
//var config  = require(''); //Set this as the config js file

//Configuring custom logger
//==============================================================================


//TEST
//====================
//request_module.sendurlrequest();
//request_module.sendurlrequestDynamic();
let static_url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States"//"https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States" //remove
let eleBlock1 = "big > a"

let dynamic_url = "https://www.youtube.com/" //"https://www.reddit.com" //remove
let eleBlock2 = 'h3'

//request_module.sendurlrequestStatic2(static_url,eleBlock1).then((res)=> console.log(res)).catch((err)=> console.log(err.message))
request_module.sendurlrequestDynamic2(dynamic_url,eleBlock2).then((res)=> console.log(res)).catch((err)=> console.log(err.message))
