/**
 * Info
 * =============================================================================
 * Loads information into a database
 */

 //SETTING NODE JS ENVIRONMENT Variables
//==============================================================================

// BASE SETUP
// =============================================================================
// Add the required system Packages
const fr = require('../support_modules/filereader.js');
const request_module = require('../support_modules/request-module.js');
var CronJob = require('../support_modules/cron-module.js');
const db = require('../support_modules/database_module.js')

//CONFIG FILES
// =============================================================================
const urlConfigFile = './config/urlconfig.json'; // file containing the urls to scrape
let urlConfig = fr.syncjsonReader(urlConfigFile);

//Configuring custom logger
//==============================================================================

// Methods
// =============================================================================
//
//CronJob.loadJob(cronExpression,cb)
//

function load(){
	let urlConfig = fr.syncjsonReader(urlConfigFile);

	for (i in urlConfig.urlconfig) {
		//build(urlConfig.urlconfig[i].url,urlConfig.urlconfig[i].blockElement,urlConfig.urlconfig[i].pageType)
		CronJob.loadJob('* 1/5 * * * *'
			,build(urlConfig.urlconfig[i].url,urlConfig.urlconfig[i].blockElement,urlConfig.urlconfig[i].pageType))
	}
}

async function build(url,blockElement,type){
	console.log(await request_module.makeRequest(url,blockElement,type))
	db.storeToDatabase();
}

function startEngine(cronExpression,cb){
	 load();
	console.log('prospectus engine has started...');
}

//Export module
// =============================================================================
module.exports = {startEngine};