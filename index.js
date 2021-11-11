let x = 0;
let n = 1;
let cost = 10;
function increment() {
    x += n;
    document.getElementById("A").innerText = x;
    console.log(x);
};
function double() {
    if (x >= cost){
        x -= cost;
        n *= 2;
        document.getElementById("A").innerText = x;
        cost *= 2;
        document.getElementById("B").innerText = "Double ("+cost+")";
    };
};