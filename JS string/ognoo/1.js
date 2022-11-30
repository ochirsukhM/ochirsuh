let a = prompt("on oruulna uu")
let b= prompt("sar oruulna uu")
let c= prompt("udruu oruulna uu")
if(a.length==4 ){
    if(b<13 && b>0)
        {
            if (c<32 && c>0)
            {
                if (b.length==1){
                    b=0+b;
                }
                if(c.length==1){
                    c=0+c;
                }
                console.log(a,"-",b,"-",c);
            }
            else alert("zuv udur oruulna uu!!")
        }
    else alert("zuv sar oruulna uu!!")

 
}
else    alert("zuv on oruulna uu!!")