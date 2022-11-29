let i = 4 > 3; 
let iii = 4 < 3; 
let ii = 4 >= 3;//true
let iv = 4 <= 3;//false
let v = 4 == 4;//true
let vi = 4 === 4;//true
let vii = 4 != 4;//false
let iix = 4 !== 4;//false
let ix = 4 != "4";//flase
let x = 4 == "4";//true
let xi = 4 === "4";//false
console.log(i)
console.log(ii)
console.log(iii)
console.log(iv)
console.log(v)
console.log(vi)
console.log(vii)
console.log(iix)
console.log(ix)
console.log(x)
console.log(xi)
let one = 4 > 3 && 10 < 12;//true
let two = 4 > 3 && 10 > 12;//false
let three = 4 > 3 || 10 < 12;//true
let four = 4 > 3 || 10 > 12;//true
let five = !(4 > 3);//false
let six = !(4 < 3);//true
let eight = !(4 > 3 && 10 < 12);//false
let nine = !(4 > 3 && 10 > 12);//true
let ten = !(4 === "4");//true
console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(five)
console.log(six)
console.log(eight)
console.log(nine)
console.log(ten)
let myAge=25;
let yourAge=prompt("nasaa oruulna uu?");
if (yourAge>myAge){
    console.log("ta hugshin")
}
else console.log("bi hugshin")
let day=2;
if (0<day<5){
console.log("Ajliin udur")
}
else console.log("amraltiin udur")
let hours= prompt("tsagaa oruulna uu")
let rateperhour= 28;
let tsalin;
tsalin= rateperhour * hours;
console.log("tanii tsalin=", tsalin)