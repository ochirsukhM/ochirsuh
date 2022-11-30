let a=prompt("duriin too oruulna uu")
let b=prompt("2 dah toogoo oruulna uu")
if(a>b){
    c=(Math.floor(Math.random()*(a-b))+ Number(b))
    console.log(c)
}
else if(a<b){
    c=(Math.floor(Math.random()*(b-a))+ Number(a))
    console.log(c)
}
else if(a==b){
    console.log("2 uur too oruulna uu")
}
