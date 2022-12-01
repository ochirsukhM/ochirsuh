let a = prompt("kvadratiin tal boloh too oruulna uu")
let b= 0;
let c=0;
let d=0;
let y = "*"
let x= "\n*"
let z ="*"
if(a==1){
console.log(y)
}
else if(a==2){
    console.log(y+y+"\n"+y+y)
}
else if(a>2){
while(a-1>b){
   y+= z
   b++;
}
while(a-2>c){
    x+="\ " 
    c++;
    
}
let a1=x;
while(a-3>d){
    x= x+z+a1;  
    d++;
}

console.log(y+x+"*\n"+y)
}
else alert("buruu too baina!")