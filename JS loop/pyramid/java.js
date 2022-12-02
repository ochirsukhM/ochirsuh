let a = prompt("pyramidiin undur oruulna uu")
let b = "*";
let d = "*";
let e = "\ "
let g = "";


for (let c = 1; c <= a; c++) {
    for (let f = 1; f <= (a - c); f++) {
        g = g + e
    }
    for (let h = 0; h < (2 * c - 1); h++) {
        g = g + d;
    }
    g = g + "\n"
}
console.log(g)
