function sorter(a){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                let b=a[i]
                a[i]=a[j]
                a[j]=b
            }
        }
    }
    console.log(a)
}
let arr = [4,32,2,5,8,-10,20,1,0,-20]
    sorter(arr)
