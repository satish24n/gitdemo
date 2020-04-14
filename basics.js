var score1 = 50;
console.log("first score: " + score1);
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
console.log("----------------------------");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// let b:string = "Hello";
// var b:number = 5;
// console.log(b);
