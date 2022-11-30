let n= (Math.floor(Math.random()*(999-100))+100);

let c=n%10;
let b= (n-c)/10%10;
let a = (n-b*10-c)/100;
let sum = a + b+ c;
console.log("3orontoi random too=", n);
console.log("tsipruudin niilber=",sum)