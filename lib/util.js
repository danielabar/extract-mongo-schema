const ObjectID = require('mongodb').ObjectID;

// TODO Handle Array of string ids
module.exports.extractValue = function extractValue(typeName, value) {
  let result = value;
  if (typeName === 'Object') {
    result = value.toString();
  }
  if (typeName === 'string') {
    const csv = value.split(',');
    if (csv.length > 1) {
      result = csv[0];
    }
  }
  return result;
}

module.exports.isValidMongoID = function isValidMongoID(val) {
  let result = true;
  try {
    const testObj = ObjectID(val);
  } catch (err) {
    result = false;
  }
  return result;
}