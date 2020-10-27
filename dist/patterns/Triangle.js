"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equilateralTriangle = void 0;
function equilateralTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let sp = "";
        for (let j = rows; j >= i; j--) {
            sp = sp + " ";
        }
        for (let k = 1; k <= i; k++) {
            sp = sp + "* ";
        }
        console.log(sp);
    }
}
exports.equilateralTriangle = equilateralTriangle;
/*for(let i=2;i<=10;i++){
    
equilateralTriangle(i);
}*/
//# sourceMappingURL=Triangle.js.map