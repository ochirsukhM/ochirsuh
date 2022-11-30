let a =prompt("ta registriin dugaaraa oruulna uu")
if (a.length==10){
if(isNaN(a[0])&& isNaN(a[1]))
    {
        if (!isNaN(a[2]) && !isNaN(a[3]) && !isNaN(a[4]) && !isNaN(a[5]) && !isNaN(a[6]) && !isNaN(a[7]) && !isNaN(a[8]) && !isNaN(a[9]))  {
            console.log("ta zuv dugaar oruullaa bayar hurgiy");
        } 
        else alert("suuliin 8 oron too bish baina!!");
    }
    else alert("ehnii 2 oron useg bish baina!!")
}
else alert("ta buruu dugaar oruullaa 10 orontoi bish baina");
