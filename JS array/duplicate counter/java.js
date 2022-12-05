let n= prompt("too oruul")
let b=0;
const a=[0,1,2,3,4,5,6,7,8,9]

    for(let j=0;j<a.length;j++){
        for(let i=0;i<n.length;i++){
        if(n[i]==a[j]){
            b++
            }
            
    }
    console.log(j,b)
    b=0;
}