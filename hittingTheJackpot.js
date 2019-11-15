// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

//testJackpot(["@", "@", "@", "@"]) ➞ true
//testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

//create a variable that will hold the first element of the array
//loop through the array comparing the values to the first element
//return false if an element does not equal the first value
//return true otherwise

const testJackpot = ( array ) => {
    if ( array.length === 0 ) {
        return false;
    }

    const firstElement = array[ 0 ];

    for ( let i = 1; i < array.length; i++ ) {
        if ( firstElement !== array[ i ] ) {
            return false;
        }
    }
    return true;
}

console.log(testJackpot( [ "SS", "SS", "SS", "Ss" ] ));
console.log(testJackpot( [ "@", "@", "@", "@" ] )) ;