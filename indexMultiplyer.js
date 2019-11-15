//Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

//indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

//indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)

const indexMultiplier = ( arr ) => {
    if ( arr.length === 0 ) return 0;

    let sum = 0;
    let temp = 0;

    for ( let i in arr ) {
        temp = i * arr[ i ];
        sum += temp;
    }
    return sum;
}

console.log( indexMultiplier( [1, 2, 3, 4, 5] ) )

