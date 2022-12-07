let n=prompt("too oruulna uu")
let a=[1]
let b=[1]
console.log(a)
for(let i=1;i<(Number(n));i++){
  
    for(let j=0;j<i;j++){
         a[j]=b[j]
    }
    for(let k=0;k<=i/2;k++){
     a[k+1]=b[k]+b[k+1]
     a[a.length-k]=a[k-1]
    }
    a[i]=1
    a[1]=i
    a[a.length-2]=i

    console.log(a)

 }

