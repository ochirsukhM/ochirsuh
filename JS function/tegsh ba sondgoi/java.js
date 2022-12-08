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


function even(c,d,e){

    console.log(c,d)
    // c=a
    // d=b
    e=[]
    if(c>d){
      for(let i=d;i<c;i++){
        
                if((i%2)==0){
            e.push(Number(i))
                            }
        }
    }
    else if(c<d)  {
        
            for(let i=c;i<d;i++){
                if((i%2)==0){
            e.push(Number(i))
            }
        }
        
    }
    console.log(e);
}
function odd(c,d,e){
    // c=a
    // d=b
    e=[]
    if(c>d){
      for(let i=d;i<c-1;i++){
        
                if((i%2)==0){
            e.push(Number(i)+1)
                            }
        }
    }
    else if(c<d)  {
        
            for(let i=c;i<d-1;i++){
                if((i%2)==0){
            e.push(Number(i)+1)
            }
        }
        
    }
    console.log(e);
}
let f;
even(a,b,f)
odd(a,b,f)