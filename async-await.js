const getDataPromise = ( num ) => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        typeof num === 'number' ? resolve( num * 2 ) : reject( 'Number must be provided' )
    }, 2000 )
} );


//a function with async returns a promise with the data resolved
const processData = async () => {
    let data = await getDataPromise( 2 );
    data = await getDataPromise( data );    //wont run until the first promise resolves or rejects
    return data;    //wont return until the second promise esolves or rejects
}

processData().then( ( data ) => {
    console.log( data )
} ).catch( ( error ) => {
    console.log( error )
} )