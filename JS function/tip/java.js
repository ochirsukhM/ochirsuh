function total(a){
    if(a>=5000&&a<=30000){
        a=a*1.15
    }
    else a=a*1.2;
    return a;
}
console.log(total(3000))
console.log(total(27500))
console.log(total(100000))
function tip(a){
    if(a>=5000&&a<=30000){
        a=a*0.15
    }
    else a=a*0.2;
    console.log(a)
}
tip(3000)
tip(27500)
tip(100000)
function averageTotal(a){
    a=(total(3000)+total(27500)+total(100000))/3
    console.log(a)
}
averageTotal(2)
