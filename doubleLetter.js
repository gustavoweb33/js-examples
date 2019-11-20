//Create a function that takes a word and returns true if the word has two consecutive identical letters.

/*doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
doubleLetters("orange") ➞ false
doubleLetters("munchkin") ➞ false */

//loop throught the string
//create a var with first letter of the string
//compare var value with the following letter
//if they match return true
//other wise more the value of the var to the next element
//repeat the process

const doubleLetters = ( word ) => {
    if ( typeof word !== 'string' ) return false;

    if ( word.length === 1 ) return false;

    word = word.toLowerCase()
    let currentLetter = word[ 0 ];

    for ( let i = 0; i < word.length; i++ ) {
        let nextLetter = word[ i + 1 ];

        if ( nextLetter === undefined ) {
            return false;
        }

        if ( currentLetter === nextLetter ) {
            return true
        }
        else {
            currentLetter = nextLetter;
        }

    }
    return false;
}

console.log( doubleLetters( 'loOp' ) );
