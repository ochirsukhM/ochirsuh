function input1(a){
    a= prompt("Ehnii toog oruul")
    return a;
}
function input2(b){
    b= prompt("daraagiin toog oruul")
    return b;
}
let a1;
let a2;
let a=input1(a1);
let b=input2(a2);
// function even(c,d,e){
//     c=a
//     d=b
//     e=[]
//     if(c>d){
//         if(Math.floor(d)%2==0){
//             for(let i=0;i<Math.floor((c-d)/2);i++){
//             e[i]=Math.floor(d)+2+2*i
//             }
//         }
//         else  for(let i=0;i<Math.floor((c-d)/2);i++){
//             e[i]=Math.floor(d)+1+2*i
//             }
       
//     }
//     else if(c<d)  
//     if(Math.floor(c)%2==0){
//         for(let i=0;i<Math.floor((d-c)/2);i++){
//         e[i]=Math.floor(c)+2+2*i
//         }
//     }
//     else  for(let i=0;i<Math.floor((d-c)/2);i++){
//         e[i]=Math.floor(c)+1+2*i
//         }
//     // console.log(c)
//     // console.log(d)
//     console.log(e);
// }
function odd(c,d,e){
    c=a
    d=b
    e=[]
    if(c>d){
        if(Math.floor((d)%2)==0){
            for(let i=0;i<Math.floor((c-d)/2);i++){
            e[i]=Math.floor(d)+1+2*i
            }
        }
        else {
            for(let i=0;i<Math.floor((c-d)/2);i++){
                e[i]=Math.floor(d)+2+2*i
                }
        } 
       
    }
    else if(c<d)  {
        if(Math.floor((c)%2==0)){
            for(let i=0;i<Math.floor((d-c)/2);i++){
            e[i]=Math.floor(c)+1+2*i
            }
        }
        else  {
            for(let i=0;i<Math.floor((d-c)/2);i++){
                e[i]=Math.floor(c)+2+2*i
                }
        }
    }
  
    // console.log(c)
    // console.log(d)
    console.log(e);
}

// (even(a,b))
odd(a,b)