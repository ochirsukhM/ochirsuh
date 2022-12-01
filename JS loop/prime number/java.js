let n= prompt("100aas baga eyreg too oruulna uu")
let a=1;
let b= true;
if (n<100 && n>0){
    while (a<n-1){
        a++;
        if(n%a==0){
            b= false;
            
        }
    }
}
else alert("100aas baga eyreg too oruulna uu!!")
if(b==false){
    console.log(n,"is not prime number")
}
else console.log(n,"is prime number")