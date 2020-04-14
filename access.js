"use strict";
exports.__esModule = true;
var class2_1 = require("./class2");
var u = new class2_1.classDemo(123);
u.setUsername();
console.log(u.getUsername("Satish"));
console.log(u.getSSN());
function validate(value) {
    // console.log(value);
    return value + " Kumar";
}
validate("Hey Satish!!");
console.log(validate("Hey Satish"));
var obj = {
    color: "red",
    engine: 100
};
console.log(obj.color);
console.log(obj.engine);
