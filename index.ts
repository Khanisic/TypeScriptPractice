let year : number;
let leap = (year) : boolean =>{
    const a = year;
    if( a % 4 == 0 && a % 100 != 0 && a % 4 ==0 ){
        return true;
    }
    else{
        return false;
    }
}
console.log(leap(2018))

let str : string;
let reverseStr = (str) : string =>{
    let splitStr = str.split("");
    let reverseArray = splitStr.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseStr("GUVI ZEN"))
