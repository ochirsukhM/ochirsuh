let itCompanies= ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies[0],itCompanies[1],itCompanies[2])
console.log(itCompanies[itCompanies.length-3],itCompanies[itCompanies.length-2],itCompanies[itCompanies.length-1])
console.log(itCompanies[Math.floor(itCompanies.length/2)])
delete itCompanies[0]
console.log(itCompanies)
delete itCompanies[itCompanies.length-1]
console.log(itCompanies)