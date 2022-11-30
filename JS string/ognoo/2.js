let number= prompt("utasnii dugaaraa oruulna uu?")
if(number.length==8){
    if (number[0]==9){
        if(number[1]==9||number[1]==5||number[1]==4){
            console.log(number,"-mobicom")
        }
       else if(number[1]==1||number[1]==0||number[1]==6){
        console.log(number,"-skytel")
       }
            else if(number[1]==8||number[1]==3||number[1]==7){
                console.log(number,"-gmobile")
            }  
            else console.log("tanii dugaar oldsongui")
    }
    else if (number[0]==8 && (number[1]==8||number[1]==0)){
        console.log(number,"-unitel")
    }
     else if(number[0]==8 && number[1]==5){
        console.log(number,"-mobicom")
    }
    else if(number[0]==8 && number[1]==3){
        console.log(number,"-gmobile")
    }
    else console.log("tanii dugaar oldsongui")
}
else alert("zuv dugaar oruulna uu!!")