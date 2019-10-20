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
