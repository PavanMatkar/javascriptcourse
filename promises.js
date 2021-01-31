//communication between "producer" and "consumer" called as promise.
//promises are special javascript objects.
//we will create the promises by using "Promise" class.
//consumer will consume the Promises by using ".then()" function.
//Promises have following states.
//success @resolve
//failure @reject
//pending
/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("tomorrow i will discuss async & await keyword");
    });                                                 //creating the promise
    promise1.then((posRes)=>{                           //consuming the promise
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                         //tomorrow i will discuss async & await keyword
*/
/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },5000);
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                         //Hello (after 5 seconds)
*/

    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise1");
        },0);
    });
    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Error");
        },5000);
    });
    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise3");
        },10000);
    });

/*    
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                         //Promise1

    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                         //Error

    promise3.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                         //Promise3
*/
/*
    Promise.all([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/
/*
Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
*/                                //    [{ status: 'fulfilled', value: 'Promise1' },
                                   //     { status: 'rejected', reason: 'Error' },
                                   //     { status: 'fulfilled', value: 'Promise3' }
                                   //                                                 ]
Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});                         //Promise1














