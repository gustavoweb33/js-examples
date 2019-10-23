//callbacks
const getDataCallback = ( callback ) => {
    console.log( callback )
    setTimeout( () => {
        callback( undefined, 'This is the data' );
    }, 2000 );
}

getDataCallback( ( error, data ) => {
    if ( error ) {
        console.log( 'There was an error' );
    }
    else {
        console.log( data );
    }
} );


//Promise
const myPromise = new Promise( ( resolve, reject ) => {
    let isTrue = true;
    //we tell a promise what to do when it succeeds
    if ( isTrue ) {
        resolve( { title: 'my data', data: 384 } ); //resolve can accept any argument
    }
    //what to do when it fails
    else {
        reject( 'This is my promise error' )
    }


} );

//then will be called when the promise resolves succesfully
//catch will be called if the promise is rejected
myPromise.then( ( data ) => {
    console.log( data ); //do this when it succeeds
} )
    .catch( ( error ) => {
        console.log( error );   //do this when it fails
    } );
