const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 45,
      isLoggedIn: false,
      points: 30
    },
    Job: {
      email: 'job@job.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 39,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 25,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 18,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 40
    }
  }
  console.log(users.Alex)

// for (let y = 0; y <= Object.keys(users).length; )
const y = Object.values(users)
let max=0
for(i=0;i<y.length;i++)
{
    for(j=0;j<y.length;j++){

        
        if(y[i].skills.length<y[j].skills.length){
            max=y[j]
        }
    }
    
}
console.log("hamgiin olon ur chadvartai",max)
let count=0
  console.log(Object.keys(users).length)
  for(i=0;i<y.length;i++){
    if(y[i].points>=50){
        count++
    }
  }
  console.log("50as deesh onootoi hereglegchdiin too:",count)
  let count2=0
  for(i=0;i<y.length;i++){
  if(y[i].skills.includes("MongoDB")==true && y[i].skills.includes("Express")==true && y[i].skills.includes("React")==true && y[i].skills.includes("Node")==true){
        console.log("MERN developers",y[i])
    }
  }

  for(i=0;i<y.length;i++){
    for(j=i+1;j<y.length;j++){
        if(y[i].age>y[j].age){
            let z=y[i]
            y[i]=y[j]
            y[j]=z
        }
    }
  }
  console.log("hamgiin ahmad", y[y.length-1])
  console.log("2 dah ahmad", y[y.length-2])
  console.log("3 dah ahmad",y[y.length-3])