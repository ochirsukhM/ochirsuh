let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
}
]
let count1=0;
let count2=0;
let totalAge=0;
let averageAge=0
for(i=0;i<students.length;i++){
    if(students[i].gender=="male"){
        count1++
    }
    else count2++;
    totalAge+=students[i].age;
}
averageAge=totalAge/(students.length)
console.log("eregtei:"+count1)
console.log("emegtei:"+count2)
console.log("dundaj nas=",averageAge)
students[0].lastName= "Gonchigsumlaa" 
students[1].lastName="Bat "
students[2].lastName="Bold"
students[3].lastName="Suh"
students[4].lastName="Bayar"
console.log(students)
let a=[]
for(i=0;i<students.length;i++){
    for(j=0;j<i;j++){
        if(students[i].age==students[j].age){
            a.push(students[i])
            a.push(students[j])
        }
    }
}
console.log(a)