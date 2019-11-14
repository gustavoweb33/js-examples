//reverse a string
//loop backwards and save it to a varible

const reverseStr = ( string ) => {
    console.log( string )
    if ( string.length === 0 && typeof string !== 'string' ) {
        return 'Must be a string'
    }
    let reversed = ''
    for ( let i = string.length - 1; i >= 0; i-- ) {
        console.log( string[ i ] )
        reversed += string[ i ];
    }

    console.log( reversed )
}

reverseStr( 'hello' )


const isPalindrome = ( string ) => {
    console.log( string )
    if ( string.length === 0 && typeof string !== 'string' ) {
        return 'false'
    }
    if ( string.length === 1 ) return true;

    let palindrome = ''
    for ( let i = string.length - 1; i >= 0; i-- ) {
        palindrome += string[ i ];
    }
    return string === palindrome;
}

console.log( isPalindrome( 'racecar' ) )

const reverseInt = ( int ) => {
    int = int.toString()

    let reversedInt = ''
    for ( let i = int.length - 1; i >= 0; i-- ) {
        reversedInt += int[ i ];
    }
    reversedInt = Number( reversedInt )
    console.log( reversedInt, typeof reversedInt )
}

reverseInt( 164 )

//loop through the string.
//1. capitalize the very first letter str[0]
//after encountering an empty string -> capitalize the following letter

function capitalize( string ) {
    let capString = ''

    for ( let i = 0; i < string.length; i++ ) {
        if ( i === 0 ) {
            capString = string[ 0 ].toUpperCase()

        }
        else if ( string[ i ] === ' ' ) {
            capString = `${ capString } ${ string[ i + 1 ].toUpperCase() }`
            i++;
        }

        else {
            capString += string[ i ];
        }

        console.log( capString )
    }
}
    capitalize( 'there is a little red ballon.' );

class Vehicle {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    printName() {
        console.log(this.name)
    }
}

const car = new Vehicle('Honda', 2016);

Vehicle.prototype.getColor = function() {
    console.log('inside the car prototype')
}

car.getMake = (make) => {
    console.log(`the make is ${make}`)
}

car.getMake('chevy')

