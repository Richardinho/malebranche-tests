let malebranche = require('malebranche');

console.log(malebranche);

let srcFile = 'lab-clip-path.svg';
let name = 'generated-svg.svg';
let hRefLength = 32;
let vRefLength = 32;
let x = 0;
let y = 0;

malebranche.main(srcFile, name, hRefLength, vRefLength, x, y);