let a= Math.floor(Math.random()*100)
alert(a)
let b;
while(a!==b){
    let b= prompt("1-100iin hoorond too taana uu");
    if(a==b){
        alert("tanii too zuv baina")
        break;
    }
    else if(a>b){
        alert("tanii too baga baina")
    }
        else alert("tanii too ih baina")
}