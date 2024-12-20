import { canvasConverse } from "./script.js";

const $ = (x) => document.querySelector(x);

// init
const cc = new canvasConverse($("canvas"), { w: 500, h: 500 });
window.cc = cc;
cc.canvas.style.outline = "1px solid white";

// fun part
cc.rectangle({ x: 0, y: 0, w: 200, h: 200, fill: "white" });
cc.rectangle({ x: 100, y: 100, w: 300, h: 200, fill: "red" });
cc.rectangle({ x: 300, y: 50, w: 150, h: 150, fill: "cyan", stroke: "red" });
cc.triangle(0, 300, 350, 350, 100, 500, "#c2e99b");
cc.ellipse({
  x: 100,
  y: 100,
  r: 25,
  fill: "black",
});