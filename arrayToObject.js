const arrayToObj = ( arrayToConvert ) => {
    const converToObj = {};
    //obj = {arrayToConver[i]: arrayToConvert[i+1]}
    while ( arrayToConvert.length ) {
        let i = 0;
        let tempArray = arrayToConvert[ i ];

        converToObj[ tempArray[ 0 ] ] = tempArray[ 1 ]
        arrayToConvert.shift();
    }
    return converToObj;
}

console.log( arrayToObj( [ [ "a", 1 ], [ "b", 2 ] ] ) )