let arrayOfNumbers= [43,56,23,89,88,90,92,652,15,290,11]
sum=0
for(let i=0;i<arrayOfNumbers.length;i++){
    sum=sum+arrayOfNumbers[i]
}
console.log(sum)
sum=0;
for(let i=0;i<arrayOfNumbers.length;i++){
if(sum<arrayOfNumbers[i]){
    sum=arrayOfNumbers[i]
}
}
console.log(sum)
for(let i=0;i<arrayOfNumbers.length;i++){
    if(sum>arrayOfNumbers[i]){
        sum=arrayOfNumbers[i]
    }
    }
    console.log(sum)
    for(let i=0;i<arrayOfNumbers.length;i++){
        arrayOfNumbers[arrayOfNumbers.length-i]=arrayOfNumbers[(arrayOfNumbers.length-1-i)]
    }
   arrayOfNumbers[0]=592;
   arrayOfNumbers[arrayOfNumbers.length]=593
    console.log(arrayOfNumbers)