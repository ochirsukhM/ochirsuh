let a=[4,2,34,4,1,12,1,4]
let b=0;
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
        if(a[i]==a[j]){
     
                b++;
        }
    }
    if(b>1){
        console.log(a[i])
    }
    b=0;
   }