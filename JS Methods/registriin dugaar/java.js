let a= prompt("registriin dugaaraa oruulna uu")
function isCorrectReg(register){
    if(register.length==10){
        return register;
    }
    else console.log("buruu registriin dugaar baina")
}
function getGender(register){
    if(register.slice(8,9)%2==0){
        console.log("emegtei hun baina")
    }
    else {
        console.log("eregtei hun baina")
    }
}
function getBirthDay(register){
    if(register.slice(4,6)>=1 && register.slice(4,6)<13){
        if(register.slice(2,4)>=0 && register.slice(2,4)<100){
            if(register.slice(6,8)>0 && register.slice(6,8)<32){
                console.log("19"+ register.slice(2,4)+"onii"+register.slice(4,6)+"sariin"+register.slice(6,8)+ "-nii udur tursun baina")
            }
            else console.log("buruu registriin dugaar baina")
        
        }
        else {
            console.log("buruu registriin dugaar baina")
        }
    }
   else if(register.slice(4,6)>=21 && register.slice(4,6)<33){
    if(register.slice(2,4)>=0 && register.slice(2,4)<22){
        let b= register.slice(4,5)
        if(b==2)
        {
            b=0
        }
        if(b==3){
            b=1
        }
        if(register.slice(6,8)>0 && register.slice(6,8)<32){
            console.log("20" + register.slice(2,4)+"onii"+b+register.slice(5,6)+"sariin"+register.slice(6,8)+ "-nii udur tursun baina")
        }
        else console.log("buruu registriin dugaar baina")
    }
    else {
        console.log("buruu registriin dugaar baina")
    }
   
   }
   else console.log("buruu registriin dugaar baina")
    

}
function getBirthRegion(register){


    let n=[["А","Архангай"],
            ["Б","Баян-Өлгий"],
            ["В","Баянхонгор"],
            ["Г","Булган"],
            ["Д","Говь-Алтай"],
            ["Е","Дорноговь"]
        ,["Ж","Дорнод"]
        ,["З","Дундговь"]
        ,["И","Завхан"]
        ,["Й","Өвөрхангай"]
        ,["К","Өмнөговь"]
       , ["Л","Сүхбаатар"]
       , ["М","Сэлэнгэ"]
        ,["Н","Төв"]
        ,["О","Увс"]
        ,["П","Ховд"]
        ,["Р","Хөвсгөл"]
        ,["С","Хэнтий"]
        ,["Т","Дархан-Уул"]
        ,["Ф","Орхон"]
        ,["Х","Говьсүмбэр"]
        ,["У,","Улаанбаатар"]
    ,["Ц","Улаанбаатар"]]
        for(i=0;i<n.length;i++){
            if(register[0]==n[i][0]){
                console.log("Tursun aimag "+ n[i][1])
            }
            
        }
        
}
function getRegisterInfo(register){
    isCorrectReg(register)
    getBirthDay(register)
    getGender(register)
    getBirthRegion(register)
}
getRegisterInfo(a)