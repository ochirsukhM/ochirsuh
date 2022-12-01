let a= prompt("oguulber oruulna uu")

let b= 0;
let c = "";
while(b<(a.length)){
    if (a[b]==a[b].toLowerCase()){
        c=c+a[b].toUpperCase()
    }
    else c= c+a[b].toLowerCase()
    b++;
}
console.log(c)
