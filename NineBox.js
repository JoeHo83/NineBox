function next() {
    var topLeft = document.getElementById("topLeft").innerText++;
    var topMid = document.getElementById("topMid").innerText++;
    var topRight = document.getElementById("topRight").innerText++; 
    var midLeft = document.getElementById("midLeft").innerText++;
    var midMid = document.getElementById("midMid").innerText++;
    var midRight = document.getElementById("midRight").innerText++;
    var bottomLeft = document.getElementById("bottomLeft").innerText++;
    var bottomMid = document.getElementById("bottomMid").innerText++;
    var bottomRight = document.getElementById("bottomRight").innerText++;
    //var nineBox = [topLeft, topMid, topRight, midLeft, midMid, midRight, bottomLeft, bottomMid, bottomRight];
    
    if (topLeft >= 9) {
        document.getElementById("topLeft").innerHTML = "1";
    };
    if (topMid >= 9) {
        document.getElementById("topMid").innerHTML = "1";
    };
    if (topRight >= 9) {
        document.getElementById("topRight").innerHTML = "1";
    };
    if (midLeft >= 9) {
        document.getElementById("midLeft").innerHTML = "1";
    };
    if (midMid >= 9) {
        document.getElementById("midMid").innerHTML = "1";
    };
    if (midRight >= 9) {
        document.getElementById("midRight").innerHTML = "1";
    };
    if (bottomLeft >= 9) {
        document.getElementById("bottomLeft").innerHTML = "1";
    };
    if (bottomMid >= 9) {
        document.getElementById("bottomMid").innerHTML = "1";
    };
    if (bottomRight >= 9) {
        document.getElementById("bottomRight").innerHTML = "1";
    };
};

function back() {
    var topLeft = document.getElementById("topLeft").innerText--;
    var topMid = document.getElementById("topMid").innerText--;
    var topRight = document.getElementById("topRight").innerText--; 
    var midLeft = document.getElementById("midLeft").innerText--;
    var midMid = document.getElementById("midMid").innerText--;
    var midRight = document.getElementById("midRight").innerText--;
    var bottomLeft = document.getElementById("bottomLeft").innerText--;
    var bottomMid = document.getElementById("bottomMid").innerText--;
    var bottomRight = document.getElementById("bottomRight").innerText--;
    //var nineBox = [topLeft, topMid, topRight, midLeft, midMid, midRight, bottomLeft, bottomMid, bottomRight];

    if (topLeft <= 1) {
        document.getElementById("topLeft").innerHTML = "9";
    };
    if (topMid <= 1) {
        document.getElementById("topMid").innerHTML = "9";
    };
    if (topRight <= 1) {
        document.getElementById("topRight").innerHTML = "9";
    };
    if (midLeft <= 1) {
        document.getElementById("midLeft").innerHTML = "9";
    };
    if (midMid <= 1) {
        document.getElementById("midMid").innerHTML = "9";
    };
    if (midRight <= 1) {
        document.getElementById("midRight").innerHTML = "9";
    };
    if (bottomLeft <= 1) {
        document.getElementById("bottomLeft").innerHTML = "9";
    };
    if (bottomMid <= 1) {
        document.getElementById("bottomMid").innerHTML = "9";
    };
    if (bottomRight <= 1) {
        document.getElementById("bottomRight").innerHTML = "9";
    };
};

function next2 () {
    var topLeft2 = document.getElementById("topLeft2").innerText++;
    var topMid2 = document.getElementById("topMid2").innerText++;
    var topRight2 = document.getElementById("topRight2").innerText++; 
    var midLeft2 = document.getElementById("midLeft2").innerText++;
    var midMid2 = document.getElementById("midMid2").innerText++;
    var midRight2 = document.getElementById("midRight2").innerText++;
    var bottomLeft2 = document.getElementById("bottomLeft2").innerText++;
    var bottomMid2 = document.getElementById("bottomMid2").innerText++;
    var bottomRight2 = document.getElementById("bottomRight2").innerText++;
    
    if (topLeft2 >= 9) {
        document.getElementById("topLeft2").innerHTML = "1";
    };
    if (topMid2 >= 9) {
        document.getElementById("topMid2").innerHTML = "1";
    };
    if (topRight2 >= 9) {
        document.getElementById("topRight2").innerHTML = "1";
    };
    if (midLeft2 >= 9) {
        document.getElementById("midLeft2").innerHTML = "1";
    };
    if (midMid2 >= 9) {
        document.getElementById("midMid2").innerHTML = "1";
    };
    if (midRight2 >= 9) {
        document.getElementById("midRight2").innerHTML = "1";
    };
    if (bottomLeft2 >= 9) {
        document.getElementById("bottomLeft2").innerHTML = "1";
    };
    if (bottomMid2 >= 9) {
        document.getElementById("bottomMid2").innerHTML = "1";
    };
    if (bottomRight2 >= 9) {
        document.getElementById("bottomRight2").innerHTML = "1";
    };
};

function back2 () {
    var topLeft2 = document.getElementById("topLeft2").innerText--;
    var topMid2 = document.getElementById("topMid2").innerText--;
    var topRight2 = document.getElementById("topRight2").innerText--; 
    var midLeft2 = document.getElementById("midLeft2").innerText--;
    var midMid2 = document.getElementById("midMid2").innerText--;
    var midRight2 = document.getElementById("midRight2").innerText--;
    var bottomLeft2 = document.getElementById("bottomLeft2").innerText--;
    var bottomMid2 = document.getElementById("bottomMid2").innerText--;
    var bottomRight2 = document.getElementById("bottomRight2").innerText--;

    if (topLeft2 <= 1) {
        document.getElementById("topLeft2").innerHTML = "9";
    };
    if (topMid2 <= 1) {
        document.getElementById("topMid2").innerHTML = "9";
    };
    if (topRight2 <= 1) {
        document.getElementById("topRight2").innerHTML = "9";
    };
    if (midLeft2 <= 1) {
        document.getElementById("midLeft2").innerHTML = "9";
    };
    if (midMid2 <= 1) {
        document.getElementById("midMid2").innerHTML = "9";
    };
    if (midRight2 <= 1) {
        document.getElementById("midRight2").innerHTML = "9";
    };
    if (bottomLeft2 <= 1) {
        document.getElementById("bottomLeft2").innerHTML = "9";
    };
    if (bottomMid2 <= 1) {
        document.getElementById("bottomMid2").innerHTML = "9";
    };
    if (bottomRight2 <= 1) {
        document.getElementById("bottomRight2").innerHTML = "9";
    };
};