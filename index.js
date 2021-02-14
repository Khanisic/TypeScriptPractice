var year;
var leap = function (year) {
    var a = year;
    if (a % 4 == 0 && a % 100 != 0 && a % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(leap(2018));
var str;
var reverseStr = function (str) {
    var splitStr = str.split("");
    var reverseArray = splitStr.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
};
console.log(reverseStr("GUVI ZEN"));
