// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash

/*numberSyllables("buf-fet") ➞ 2
numberSyllables("beau-ti-ful") ➞ 3
numberSyllables("mon-u-men-tal") ➞ 4
numberSyllables("on-o-mat-o-poe-ia") ➞ 6 */

//create a varible to keep count of the syllables
//loop through the string and increse the variable count by one each time a - is found
//add 1 to the final syllable count 

const numberSyllables = ( string ) => {
    if ( typeof string !== 'string' || string.length === 0 ) return 0;
    if ( string.length === 1 ) return 1;

    let syllableCount = 1;

    for ( let i = 0; i < string.length; i++ ) {
        if ( string[ i ] === '-' ) {
            syllableCount++;
        }
    }
    return syllableCount;
}

console.log( numberSyllables( "on-o-mat-o-poe-ia" ) )