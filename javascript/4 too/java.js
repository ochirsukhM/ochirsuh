let a=120;
let b=33;
let c=10;
let d=12;
if (a<b){
    if (a<c){
        if (a<d) console.log(a);
        else console.log(d);
    }
    else if (c<d) console.log(c);
        else console.log(d);

}
else if (b<c){
    if(b<d) console.log(b);
    else console.log(d);
}   else if(c<d) console.log(c);
        else console.log(d);