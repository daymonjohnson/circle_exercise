/*function getInput(){
    let input=prompt("What is the radius?");
    return input;
}

function calcArea(radius){
    return Math.PI*radius*radius;
}

function printArea(area,radius){
    console.log("the area of a circle with the radius of "+radius+ "is "+area);
}

let r= getInput();
let a= calcArea(r); 
printArea(a,r);*/

class Circle(){
    constructor(){
        this.radius= prompt("What radius do you want to know the area of?");
    }
}
    calcArea(){
    let area= Math.PI*this.radius*this.radius;
    return area;
}
    outPutArea(){
    let el= document.getElementById("circle");
    let text= document.createTextNode("The circle has a radius of "+Radius +"and therefore has an area of "+Area);
}
    drawCircle(){
        let el document.getElementById("circle");
        let cir= document.createElement("div");

        let height= this.radius;
        let width= this.width;
        
        cir.style="width: ${height}";
        cir.style="height: ${width}";


}
let c= new Circle();
c.outPutArea