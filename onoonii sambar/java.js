let value1=document.getElementById("input1")
let value2=document.getElementById("input2")
let value3=document.getElementById("input3")
let a=document.getElementById("new")
let b=[]
function addValues(e){
    for(i=0;i<b.length;i++){
        let c={fname:value1.value,lname:value2.value,age:value3.value}
        console.log(value1.value)
        b.push(c)
        console.log(b)
        a.innerHTML=b
    }
   
    e.preventDefault()
    value1.value=""
    value2.value=""
    value3.value=""
}

