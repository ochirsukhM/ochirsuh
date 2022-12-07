let carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
    ];
let a=prompt("ehnii usgee oruulna uu")
if(a.toUpperCase()=="A" || a.toUpperCase()=="B" || a.toUpperCase()=="C" || a.toUpperCase()=="D" || a.toUpperCase()=="F" || a.toUpperCase()=="H" ||a.toUpperCase()=="J" || a.toUpperCase()=="L")
{
    for(let i=0;i<carBrands.length;i++){
   
        if(carBrands[i][0][0]==a.toUpperCase()){
            console.log("brand:"+carBrands[i][0]+"\ncountry:"+carBrands[i][1]+"\nyear:"+carBrands[i][2])
        }
    }
}
else console.log("oldsongui")
let b=prompt("ulsaa oruulna uu (zuvhun USA ymu UK Germany Italy Japan aas oruulna uu)")
for(let j=0;j<carBrands.length;j++){
    if(carBrands[j][1]==b){
        console.log(carBrands[j][0]+","+carBrands[j][1]+","+carBrands[j][2])
    }
}
let a1=0;
let a2=0;
let a3=0;
let a4=0;
let a5=0;
for(let k=0;k<carBrands.length;k++){
    if(carBrands[k][1]=="UK"){
        a1++
    }
    if(carBrands[k][1]=="Germany"){
        a2++
    }
    if(carBrands[k][1]=="USA"){
        a3++
    }
    if(carBrands[k][1]=="Italy"){
        a4++
    }
    if(carBrands[k][1]=="Japan"){
        a5++
    }
}
console.log("Niit"+ carBrands.length+"mur data,"+"UK-"+a1+",Germany-"+a2+",USA-"+a3+",Italy-"+a4+",Japan-"+a5)