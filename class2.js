"use strict";
exports.__esModule = true;
var classDemo = /** @class */ (function () {
    function classDemo(ssn) {
        console.log("i will be executed first!");
        this.ssn = ssn;
    }
    classDemo.prototype.getUsername = function (username) {
        return this.username = username;
    };
    classDemo.prototype.setUsername = function () {
        this.username = "hello";
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}()); //class ends
exports.classDemo = classDemo;
// let u = new classDemo(123);
// u.setUsername();
// console.log(u.getUsername("Satish"));
// console.log(u.getSSN());
