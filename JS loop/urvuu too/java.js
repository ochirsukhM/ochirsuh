let a = prompt("too oruulna uu")
let c;
let d=0;
let e=a;
for (let b=0;b<=(a.length);b++){
    c=Math.floor(e/(10**((a.length-1)-b)));
    e=e-(c*(10**((a.length-1)-b)))
    d=d+(c*(10**b));  
}
console.log(d);