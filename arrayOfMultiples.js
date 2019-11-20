//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

//arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

//create an empty array
//create a varible that will hold the multiples of argumnet num
//loop through the array length times
//push var value into array and add the value of num to the var

const arrayOfMultiples = ( num, length ) => {
    if(length <= 0 ) {
        return [];
    }

    const multiples = [];
    let currentMultiple = num;

    for ( let i = 0; i < length; i++ ) {
        multiples.push( currentMultiple );
        currentMultiple += num;
    }
    return multiples;
}

console.log(arrayOfMultiples( 0, 6 ));


