const getDataPromise = ( num ) => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        typeof num === 'number' ? resolve( num * 2 ) : reject( 'Number must be provided' )
    }, 2000 )
} );


//a function with async always returns a promise with the data resolved and wraps non-promises in it
async function processData()  {
    let data = await getDataPromise( 2 );
    //await literally makes JavaScript wait until the promise settles, and then go on with the result. 
    data = await getDataPromise( data );    //wont run until the first promise resolves or rejects
    return data;    //wont return until the second promise esolves or rejects
}

// When we use async/await, we rarely need .then, because await handles the waiting for us.
processData().then( ( data ) => {
    console.log( data )
} ).catch( ( error ) => {
    console.log( error )
} )


//Error Handling
//these two functions return an error if the promise is rejected
//they are both the same with different syntax
async function anError() {
    await Promise.reject(new Error("Whoops!"));
  }

async function anotherError() {
    throw new Error('Some error occured');
}

//try catch error handling
async function tryCatchExample() {
    try {
        let response = await fetch(`some url`); 
        let user = await response.json();
    }
    catch(error) {
        // catches errors both in fetch and response.json
        console.log(error);
    }
}

tryCatchExample();
