var rect = require("./rectangle");

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "+ l + " and b = "+ b);

    rect(l,b,(err,retangle) => {
        if(err) {
            console.log("ERROR : "+err.message);
        }
        else {
            console.log("The area of rectangle dimentions l = "+ l +" and b "+ b + " is "+ retangle.area());
            console.log("The perimeter of rectangle dimentions l = "+ l +" and b "+ b + " is "+ retangle.perimeter());
        }
    });
}

solveRect(2,4);
solveRect(3,-5);
solveRect(4,0);