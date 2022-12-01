let n = prompt("duriin too oruulna uu?")
let a=0;
let b= true;
while(a<n.length-1){

if(n[a]==n[n.length-a-1]){
    b=true;
}
else b=false;
a++;
}
if (b==true){
    console.log("true")
}
else console.log("false")

//54345
//n[0]=n[4]
//n[1]=n[3]
//4334
//n[0]=n[3]
//n[1]=n[2]