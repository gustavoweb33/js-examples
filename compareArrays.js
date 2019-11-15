// /Create a function that returns true if two arrays contain identical values, and false otherwise.

//arrays are reference type so they cannot be compared with ===
//check the length of the array. if they are different then automaticaly not identical
//loop through array1 and use indexOf to check if the second array contains the elements in array1
//arr1.indexOf(arr[index])

const checkEquals = ( arr1, arr2 ) => {
    if ( arr1.length !== arr2.length ) return false;

    for ( let i = 0; i < arr1.length; i++ ) {
        let ifFound = arr1.indexOf( arr2[ i ] );

        if ( ifFound === -1 ) return false;
    }
    return true;
}

console.log( checkEquals( [ 1, 2 ], [ 1, 2 ] ) )