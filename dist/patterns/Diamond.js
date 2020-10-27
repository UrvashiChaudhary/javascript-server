"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diamondPattern = void 0;
function diamondPattern(rows) {
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
    for (let i = rows; i >= 1; i--) {
        let sp = "";
        for (let j = rows; j >= i; j--) {
            sp = sp + " ";
        }
        for (let k = i; k >= 1; k--) {
            sp = sp + "* ";
        }
        console.log(sp);
    }
}
exports.diamondPattern = diamondPattern;
/*for(let i=2;i<=10;i++){
    
diamondPattern(i);
}*/
//# sourceMappingURL=Diamond.js.map