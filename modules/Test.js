"use strict";
exports.__esModule = true;
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
require("Message");
var strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach(function (s) {
    console.log("\"" + s + "\" " + (StaticZipCodeValidator_1["default"](s) ? " matches" : " does not match"));
});
mynumber = 200;
showMessage('ajay');
exports.num = mynumber;
