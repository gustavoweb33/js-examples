//closure: a function within another function 
//with access to the outer functions scope in which it was defined
//even if outer function completes. 
const outerFunc = () => {
    const outerVar = 'A variable from the outer funtion';

    //innerFunc still works even after outerFunc is done
    const innerFunc = () => {
        //innerFunc wil still have access to the outerVar
        console.log( outerVar )
    }
    return innerFunc;
}

//stores innerFunc in closureFun b/c outerFunt returns innerFunc 
const closureFunc = outerFunc();
//called after outterFunc has returned.
closureFunc();


////////////////////////////////////////////////////////////////////////////

//closure with a private variable
const createCounter = () => {
    let count = 0;
    //count can only be modified from these methods 
    //prevents count from being modifed by the user
    return {
        increment() {
            count++;
        },
        decremenet() {
            count--;
        },
        get() {
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decremenet();
console.log( counter.get() );

////////////////////////////////////////////////////////////////////////////

//closers with currying
//Currying is the process of taking a function with multiple arguments and returning a series of functions that take one argument and eventually resolve to a value
const createAdder = ( a ) => {
    return ( b ) => {
        return a + b;
    }
}
const add10 = createAdder( 10 );
console.log( add10( -2 ) ) //return 8
const add100 = createAdder( 10 );
console.log( add10( -90 ) ) //return 10

//arrow version
const createAdderES6 = ( a ) => ( ( b ) => a + b );
const add20 = createAdderES6( 20 );
console.log( add20( 30 ) )

//uncurried example
const createAdder2 = ( a, b ) => a + b;


//another example about tipping
const tipping = ( tip ) => ( ( ammount ) => tip * ammount );
//passing the first argument
const tip15 = tipping( 0.15 );
//the second argument
const tipTotal = tip15( 100 );
console.log( `The total tip is $${ tipTotal }` );



