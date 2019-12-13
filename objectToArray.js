// Write a function that converts an object into an array, where each element represents a key-value pair.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

//create an empty array where the objToArray will be stored
//exactly 2 elements in an array key and value
//the key in the object will be element 0 and the value will be element 1
//1. an empty object will return and empty array
//2. loop over the object.
//3. push key and value into a tempArray 
//4. once the length of tempArray becomes 2 push it to the ObjToArray array 
//5. make sure to clear the temporary array holder
//6. repeat

const toArray = ( objToConvert ) => {
    if ( Object.keys( objToConvert ).length === 0 ) {
        return []
    }

    const objToArray = [];
    let tempObjToArray = [];

    for ( let key in objToConvert ) {
        if ( tempObjToArray.length === 2 ) {
            tempObjToArray = [];
        }
        tempObjToArray.push( `${ key }`, objToConvert[ key ] );
        objToArray.push( tempObjToArray );

    }
    return objToArray
}

console.log( toArray( { shrimp: 15, tots: 12 } ) );
