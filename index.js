const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('xVnuqscYwf', uuidlib.v4());
	}

module.exports = generateId
