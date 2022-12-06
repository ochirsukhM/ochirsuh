const activities=[["ajil","ideh","yriltsah","togloh","untah"],[10,1,2,3,8]]
console.table(activities)
for(i=0;i<activities.length;i++){
    activities[2]=[]
for(j=0;j<activities[0].length;j++){
   activities[2][j]=activities[1][j]/24*100
}
}
console.table(activities)
