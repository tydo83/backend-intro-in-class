const { matches, isEmpty, isEmail } = require("validator");
// load and cache validator npm to use matches, isEmpty, isEmail methods 

function checkForSymbol(target) {
  if (matches(target, /[!@#$%^&*()\[\],.?":;{}|<>]/g)) {
    return true;
  } else {
    return false;
  }
}
// if target has special characters, return true

function checkIsEmpty(target) {
  if (isEmpty(target)) {
    return true;
  } else {
    return false;
  }
}
// if target is empty, return true

function checkIsEmail(target) {
  if (isEmail(target)) {
    return true;
  } else {
    return false;
  }
}
// if target is in a correct email format, return true

module.exports = {
  checkForSymbol,
  checkIsEmpty,
  checkIsEmail,
};
