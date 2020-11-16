export function equilateralTriangle ( rows: number ): void {
    for ( let i = 1; i <= rows; i++ ) {
        let sp = '';
        for ( let j = rows; j >= i; j-- ) {
            sp = sp + ' ';
        }
        for ( let k = 1; k <= i; k++ ) {
            sp = sp + '* ';
            }
            console.log( sp );
        }
    }