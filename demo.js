import { CanvasConverse } from "./script.js";

const $ = (x) => document.querySelector(x);

// init
const cc = new CanvasConverse();
window.cc = cc;
cc.init($("canvas"), { w: 500, h: 500 });
cc.canvas.style.outline = "1px solid white";

// fun part
cc.rectangle({ x: 0, y: 0, w: 200, h: 200, fill: "white", physics: true });
cc.rectangle({ x: 100, y: 100, w: 300, h: 200, fill: "red" });
cc.rectangle({ x: 300, y: 50, w: 150, h: 150, fill: "cyan", stroke: "red" });
cc.triangle({
  x1: 0,
  y1: 300,
  x2: 350,
  y2: 350,
  x3: 100,
  y3: 400,
  fill: "#c2e99b",
  physics: true,
});
cc.ellipse({
  x: 100,
  y: 100,
  r: 25,
  fill: "black",
  physics: true,
});
cc.draw({ fill: "lime" }, (ctx) => ctx.arc(400, 420, 50, 0, 1.5 * Math.PI));
