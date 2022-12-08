
let students = [
    Gonchigsumlai = {
        birthYear : 1999,
        hobby : "Horse",
        single : false
    },
    Taaldaa = {
        birthYear : 2000,
        hobby : "sleep",
        single : true
    },
    Darga= {
        birthYear : 2004,
        hobby : "sing",
        single : false
    },
    Huslen= {
        birthYear : 2002,
        hobby : "soccer",
        single : false
    },
    Orgil= {
        birthYear : 2002,
        hobby : "sleep",
        single : false
    },
    Amaraa= {
        birthYear : 2005,
        hobby : "watching anime",
        single : true
    },
    Manlai = {
        birthYear : 1999,
        hobby : "playing ukulele",
        single : true
    },
    Byamba = {
        birthYear : 1990,
        hobby : "accounting",
        single : false
    },
    Taami = {
        birthYear : 1999,
        hobby : "playing dota",
        single : false
    },
    Ganzoo = {
        birthYear : 2004,
        hobby : "watching anime",
        single : true
    },
    Daria = {
        birthYear : 2004,
        hobby : "reading",
        single : true
    },
    jack = {
        birthYear : 1999,
        hobby : "chase",
        single : false
    },
    bebe = {
        birthYear : 2004,
        hobby : "sportmen ",
        single : true 
    },
    Amaraa = {
        birthYear : 1994,
        hobby : "making money",
        single : false
    },
    Dulguun = {
        birthYear : 1997,
        hobby : "singing ",
        single : false
    },
    Naadoo = {
        birthYear : 1997,
        hobby : "reading book",
        single : true 
    },
    Bilguun = {
        birthYear : 1995,
        hobby : "taking pic",
        single : false
    },
    Muugii = {
        birthYear : 1997,
        hobby : "soccer",
        single : true
    },
    Oochka= {
        birthYear : 1997,
        hobby : "sleeping",
        single : false
    },
]
console.log(students)
function year(){
    for(i=0;i<students.length;i++)
    {
        if(students[i].birthYear<2002)
    {
        console.log(students[i])
    }
}

}
year()
function Age(age){
    for(i=0;i<students.length;i++){
        age= 2022-students[i].birthYear
       students[i].age=age;
    }
}
Age()
console.log(students)
function status(){
    for(i=0;i<students.length;i++){
        if(students[i].single==true){
            console.log(students[i])
        }
    }
}
status()
