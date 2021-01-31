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
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
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
    });                         //Hello
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
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise3.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

/*
Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
*/














