let a= prompt("buten utasnii dugaaraa oruulna uu")
if (isNaN(a)){
    console.log("ta too oruulna uu!!")
}
else {
   
    if (a.length==12){
        if(a[0]=="+" && a[1]==9 && a[2]==7 &&a[3]==6){
            console.log("ta mongol ulsiin utasnii dugaarig zuv oruullaa")
        }
        else console.log("ta mongol ulsiin utasnii dugaarig buruu oruullaa");
    }
    else console.log("ta zuv dugaar oruulna uu")
}