let data=[]
function generateTempData (start,end){
for( let a=start;a<end;a++){
    let uPrice=Math.random()*10000;
    let am=Math.floor(Math.random()*100)
    let product= {
        productId:a+1,
        productName:"Bakery",
        unitPrice:uPrice,
        amount: am,
        totalPrice:uPrice*am,
        casherId:Math.floor(Math.random()*100),
        date:new Date()

    }
    data.push(product)
}
console.log(data)
}
generateTempData(1,30)