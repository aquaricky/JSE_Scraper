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

request_module.sendurlrequest();
request_module.sendurlrequestDynamic();