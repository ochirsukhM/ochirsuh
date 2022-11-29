let a=85;
let b=85;
let c=88;
let d=79;
let sum;
if(a>80) {
    if(b>80){
        if(c>80){
            if(d>80){
                sum=a+b+c+d;
            }
            else sum=a+b+c;        
                }
        else if(d>80){
            sum=a+b+d;
            }
            else sum=a+b        
    }
    else if(c>80){
        if(d>80) {
            sum=a+c+d;
        }
        else sum=a+c;
    }
        else sum=a;
}
else if(b>80){
        if(c>80){
                    if (d>80){
                        sum=b+c+d;
                        }
                    else sum=b+c;
                }
        else if(d>80) {
                    sum=b+d;
                        }
            else sum=b;
            }
    else if (c>80) {
                    if(d>80) {
                            sum=c+d;
                            }
                    else sum=c;
                    }
        else if(d>80){
            sum=d;
                }
            else console.log("bugd 80aas baga")
console.log(sum)