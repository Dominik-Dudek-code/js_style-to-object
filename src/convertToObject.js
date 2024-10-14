'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(/[;:]/)
    .map((trimmedString) => trimmedString.trim())
    .filter((nonEmptyString) => nonEmptyString.length > 0)
    .reduce((resultObject, currentString, stringIndex, allStrings) => {
      if (stringIndex % 2 === 0) {
        resultObject[currentString] = allStrings[stringIndex + 1];
      }

      return resultObject;
    }, {});
}

module.exports = convertToObject;
