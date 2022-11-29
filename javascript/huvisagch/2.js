let a=6;
let b=6;
let c=5;
let d=5;
let pro;
if(a<5) {
    if(b<5){
        if(c<5){
            if(d<5){
                pro=a*b*c*d;
            }
            else sum=a*b*c;        
                }
        else if(d<5){
            pro=a*b*d;
            }
            else pro=a*b        
    }
    else if(c<5){
        if(d<5) {
            pro=a*c*d;
        }
        else pro=a*c;
    }
        else pro=a;
}
else if(b<5){
        if(c<5){
                    if (d<5){
                        pro=b*c*d;
                        }
                    else pro=b*c;
                }
        else if(d<5) {
                    pro=b*d;
                        }
            else pro=b;
            }
    else if (c<5) {
                    if(d<5) {
                            pro=c*d;
                            }
                    else pro=c;
                    }
        else if(d<5){
            pro=d;
                }
            else console.log("bugd 5aas ih buyu tentsuu")
console.log(pro)