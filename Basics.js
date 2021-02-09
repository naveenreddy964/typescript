var a = 3;
var b = "ajfab";
var c = 2;
var list = [1, 2, 3, 4];
var dynamic;
dynamic = 2;
dynamic = "aja";
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
