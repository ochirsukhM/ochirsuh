let a= document.getElementById("container")
let b= document.getElementById("high")
let c = document.getElementById("low")
let data2=[]

fetchItems()

function fetchItems(){
  fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data2=[...data.products];
  drawSth()
   
}).catch((err)=>console.log(err))
}


function sortFromHigh(){
  a.innerHTML=""
  if (b.checked==true){
    console.log(("is checked"));
    data2.sort((a,b)=>b.price-a.price)
    drawSth()
  }
  else  {
    drawSth()
    console.log("not checked");
  };
 
  
}
function sortFromLow(){
  a.innerHTML=""
  if (c.checked==true){
    data2.sort((a,b)=>a.price-b.price)
    console.log("checked"); drawSth()
  }
  else  drawSth()
   
}
function drawSth(){
  
  for(i=0;i<30;i++){
    a.innerHTML+= `
    <div>
<img src=${data2[i].images[0]}></img>
<h2>${data2[i].title}$</h2>
<h2>${data2[i].price}$</h2></div>`
    
   }
}