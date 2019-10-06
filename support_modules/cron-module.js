/**
 * Info
 * =============================================================================
 * 
 */

 //SETTING NODE JS ENVIRONMENT Variables
//==============================================================================

// BASE SETUP
// =============================================================================

// Add the required system Packages
var CronJob = require('cron').CronJob;

//Configuring custom logger
//==============================================================================


// Methods
// =============================================================================
//NOTE: Please be careful when entering the cron patterns use http://crontab.org/ or https://crontab.guru/ to check the expression before putting to production.
//jobArray.push(new CronJob('5 * * * * *', function() {
//	const d = new Date();
//	console.log('Every 5 Seconds after the minute:', d);
//}));


function loadJob(cronExpression,cb){
	new CronJob(cronExpression, cb).start()
}

//Export module
// =============================================================================
module.exports = {loadJob};