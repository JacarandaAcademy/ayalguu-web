const colors = ["red", "blue", "green"];
console.log("first element", colors[0]);
console.log("second element", colors[1]);
console.log("final element", colors[2]);

console.log("Length:", colors.length);

for (const color of colors) {
    console.log("For element:", color);
}

colors.push("yellow");

colors.forEach((color) => console.log("ForEach element:", color));

let htmlCode="";

// for(const color of colors){
//    htmlCode = htmlCode + `<div style='background-color:${color}'>${color}</div>`;
// }


htmlCode = colors.map(color => `<span style='color:${color}'>${color}</span>`).join("");


console.log("htmlCode is :", htmlCode);

const container = document.getElementById("container");
container.innerHTML=htmlCode;