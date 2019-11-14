// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

//loop through the array and multiply each element by the appropriate coin
//keep adding up all the results
//compare if the result is greater than or equal to the second argument
//return true or false

// const changeEnough = ( coinsArray, totalAmmount ) => {
//     let index = 0;
//     let enoughAmmount = 0;
//     const coinValues = [ 0.25, 0.10, 0.05, 0.01 ];

//     while ( index < coinsArray.length ) {
//         let tempValue = coinsArray[ index ] * coinValues[ index ]
//         enoughAmmount += tempValue;
//         index++;
//     }
//     if ( enoughAmmount >= totalAmmount ) {
//         console.log(true)
//         return true
//     }
//     console.log(false)
//     return false;

// }

const changeEnough = ( coinsArray, totalAmmount ) => {

    const coinValues = [ 0.25, 0.10, 0.05, 0.01 ];
    let enoughAmmount = 0;

    for ( let i = 0; i < coinsArray.length; i++ ) {
        enoughAmmount = enoughAmmount + ( coinsArray[ i ] * coinValues[ i ] );
        console.log( enoughAmmount )
    }

    if ( enoughAmmount >= totalAmmount ) {
        console.log( true )
        return true
    }
    console.log( false )
    return false;
}

//changeEnough( [ 2, 100, 0, 0 ], 14.11 )

//changeEnough( [ 0, 0, 20, 5 ], 0.75 )

// changeEnough( [ 30, 40, 20, 5 ], 12.55 )

// changeEnough( [ 10, 0, 0, 50 ], 3.85 )

// changeEnough( [ 1, 0, 5, 219 ], 19.99 )

class Circle {

    constructor( radius ) {
        this.radius = radius;
        this.pie = 3.14;
    }

    getArea() {
        let area = Math.round( this.pie * ( this.radius * this.radius ) );
        return area;
    }

    getPerimeter() {
        let perimeter = Math.round( this.pie * this.radius * 2 );
        return perimeter;
    }
}

const cir = new Circle( 23.4 )
const cir2 = new Circle( 12 )
console.log( cir.getPerimeter() )


function Circle2() {
    this.radius = radius;
    this.pie = 3.14;
}

Circle2.prototype.getArea = function () {
    let area = Math.round( this.pie * ( this.radius * this.radius ) );
    return area;
}

Circle2.prototype.getPerimeter = function () {
    let perimeter = Math.round( this.pie * this.radius * 2 );
    return perimeter;
}



const XO = ( string ) => {
    string = string.toLowerCase();
    let xPosition = string.indexOf( 'x' );
    let oPosition = string.indexOf( 'o' );

    if ( xPosition && oPosition === -1 ) return true;

    let x = 0;
    let o = 0;
    for ( let i = 0; i < string.length; i++ ) {
        if ( string[ i ] === 'x' ) x++;
        if ( string[ i ] === 'o' ) o++;

    }
    if ( x === o ) return true;
    return false;
}

console.log( XO( 'zzoo' ) )

const sameValue = ( arr1, arr2 ) => {
    if ( arr1.length === 0 || arr2.length === 0 ) return false;

    let freqObj = {}

    for ( let i = 0; i < arr1.length; i++ ) {
        arr1[ i ] = arr1[ i ].toString().toLowerCase()
        freqObj[ arr1[ i ] ] = true;
    }

    for ( let i = 0; i < arr2.length; i++ ) {
        arr2[ i ] = arr2[ i ].toString().toLowerCase();
        if ( freqObj[ arr2[ i ] ] ) {
            return true
        }
    }
    return false;

}

console.log( sameValue( [ 'A', 2, 3, 4, 5 ], [ 6, 7, 8, 'a', 9 ] ) )




const findMissingNum = () => {
    let sorted3 = [ 1, 2, 3, 4 ].sort( ( a, b ) => a - b )
    //create a var that will compare the index to a sequencial number also increase is after every check

    let currentNum = 1;
    for ( let i = 0; i < sorted3.length; i++ ) {
        if ( currentNum !== sorted3[ i ] ) {
            console.log( currentNum )
            return currentNum;
        }
        currentNum++
    }
    return undefined;
}

console.log( findMissingNum() )

//create an object
//loop through the string and every time i encounter { }
//increase it's count by one
//in the end compare the two counts to see if they match
//if they do it's balanced otherwise it is not
//edge case '} {' create an if statement to check for this condition

//{left : 2, right: 1} myObj.left === myObj.right 

const isBalanced = ( braces ) => {
    if(braces === '}{') return false;

    const bracesObj = {
        left: 0,
        right: 0
    };
    for ( let i = 0; i < braces.length; i++ ) {
        if ( braces[ i ] === '{' ) bracesObj.left++;
        if ( braces[ i ] === '}' ) bracesObj.right++;
    }
    console.log(bracesObj)
    if(bracesObj.left === bracesObj.right) {
        return true;
    }
    else return false;
}

console.log(isBalanced( '}{' ))