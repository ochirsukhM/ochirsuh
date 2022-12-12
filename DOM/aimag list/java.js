let a=document.getElementsByTagName("li")
console.log(a[0].innerHTML)
console.log(a[a.length-1].innerHTML)
a=document.getElementById("aimag-315")
console.log(a.innerHTML)
document.getElementById("aimag-321").style.color="green"
// document.getElementById("aimag-321").style.backgroundColor="red"
a=document.getElementById("aimagNames")
console.log(a)
document.getElementById("aimagNames").style.color="blue"
// document.getElementsByTagName("li").style.color="red"
a.style.fontSize= "32px"
a.style.border="solid black 1px"
a=document.getElementsByTagName("li")
console.log(a)
console.log(a[0])
for(i=0;i<a.length;i++){
    a[i].style.border="solid black 1px"
    a[i].style.color="red"
    a[i].style.padding="10px"
    a[i].style.margin="10px"
}
for(i=0;i<a.length;i++){
    if((a[i].id[6])==1){
        a[i].style.color="aqua"
    }
    if((a[i].id[6])==2){
        a[i].style.color="yellow"
    }
    if((a[i].id[6])==3){
        a[i].style.color="blue"
    }
    if((a[i].id[6])==4){
        a[i].style.color="green"
    }
    if((a[i].id[6])==5){
        a[i].style.color="red"
    }
}

