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
const prospectus_load_Engine = require('./engines/prospectus_load_Engine')

//Configuring custom logger
//==============================================================================

// Methods
// =============================================================================
prospectus_load_Engine.startEngine();

//TEST
//====================
//let dynamic_url = "https://www.jamstockex.com/category/main-market-prospectus/" //"https://www.reddit.com" //remove
//let eleBlock2 = 'article > header'

//request_module.sendurlrequestStatic(static_url,eleBlock1).then((res)=> console.log(res)).catch((err)=> console.log(err.message))
//request_module.sendurlrequestDynamic(dynamic_url,eleBlock2).then((res)=> console.log(res)).catch((err)=> console.log(err.message))

//console.log('Before job instantiation');

//const job = new CronJob('0 */2 * * * *', function() {
//	const d = new Date();
//	console.log('Every 2 Minute:', d);
//});

//const job2 = new CronJob('0 */4 * * * *', function() {
//	const d = new Date();
//	console.log('Every 4 Minute:', d);
//});

//console.log('After job instantiation');
//job.start();
//job2.start();

