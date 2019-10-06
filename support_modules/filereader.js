/**
 * Info
 * =============================================================================
 * Simple module to handle reading files.
 */

 //SETTING NODE JS ENVIRONMENT Variables
//==============================================================================

// BASE SETUP
// =============================================================================
// Add the required system Packages
const fs = require('fs')

//Configuring custom logger
//==============================================================================


// Methods
// =============================================================================

//Method takes the filepath to a json file and returns an object 
function syncjsonReader(filePath){
  try{
      return JSON.parse(fs.readFileSync(filePath, 'utf8')) 
    }catch(err){
        throw new Error(err.message);
    }
}

//Export module
// =============================================================================
module.exports = {syncjsonReader};