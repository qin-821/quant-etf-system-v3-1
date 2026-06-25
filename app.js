let green = [55,60,62,68,72,75,78];
let chem = [40,50,45,70,65,80,85];

let g = green[green.length - 1];
let c = chem[chem.length - 1];

document.getElementById("greenScore").innerText = g;
document.getElementById("chemScore").innerText = c;

let state = "";

if(g > 75 && c < 60){
state = "绿电主升";
}
else if(c > 75){
state = "化工主升";
}
else{
state = "震荡";
}

document.getElementById("marketState").innerText = state;

let signal =
(g >= 80 ? "绿电强买入 " : g >= 65 ? "绿电加仓 " : "绿电观望 ")
+
(c >= 80 ? "| 化工强买入" : c >= 65 ? "| 化工加仓" : "| 化工观望");

document.getElementById("signalText").innerText = signal;

document.getElementById("position").innerText =
state === "震荡" ? "轻仓" : "均衡配置";
