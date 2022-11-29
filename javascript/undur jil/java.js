let a = prompt("jilee oruulna uu")
let b;
let c;
let d;
b=a%4;
c=a%100;
d=a%400;
if (b==0){
    if (c==0){
        if (d==0) console.log("undur jil mun")
        else console.log("undur jil bish")
    }
    else console.log("undur jil mun")
}
else console.log("undur jil bish")
