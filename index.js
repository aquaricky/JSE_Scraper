/**
 * Info
 * =============================================================================
 * Project entrypoint. Simply responsible for launching the cron engine.
 */

//SETTING NODE JS ENVIRONMENT Variables
//==============================================================================

// BASE SETUP
// =============================================================================

// Add the required system Packages
const request_module = require('./scraper-module/request-module.js');

//Configuring custom logger
//==============================================================================


//TEST
//====================
let dynamic_url = "https://www.jamstockex.com/category/main-market-prospectus/" //"https://www.reddit.com" //remove
let eleBlock2 = 'article > header'

//request_module.sendurlrequestStatic(static_url,eleBlock1).then((res)=> console.log(res)).catch((err)=> console.log(err.message))
request_module.sendurlrequestDynamic(dynamic_url,eleBlock2).then((res)=> console.log(res)).catch((err)=> console.log(err.message))
