let a=27;
let b=21;
let c=20;
if (a>b){
    if (a>c) {
        console.log("hamgiin ih=",a);
        if(b>c) console.log("hamgiin baga=",c)
        else console.log("hamgiin baga=",b)    
    }
    else {
        console.log("hamgiin ih=",c);
        console.log("hamgiin baga=",b);
    }
    }
else if(b>c) {
    console.log("hamgiin ih=",b);
    if (a>c) console.log("hamgiin baga=",c);
    else console.log("hamgiin baga=",a);
}
else {
    console.log("hamgiin ih=",c);
    console.log("hamgiin baga=",a);
}