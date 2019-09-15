const fs = require('fs')

function syncjsonReader(filePath){
  try{
      return JSON.parse(fs.readFileSync(filePath, 'utf8')) 
    }catch(err){
        throw new Error(err.message);
    }
}

module.exports = {syncjsonReader};