// passing one function to another function as an argument called as callback 
/*
function fun_one(arg1){
    console.log(arg1());
};
fun_one(function fun_two(){
    return "Hello";
});                             //Hello
*/
/*
    function mean(param1,param2,param3){
        console.log( param1(),
                    param2(),
                    param3() );
    };

    mean(function frontEnd(){
        return "Angular";
    }, function backEnd(){
        return "NodeJS";
    }, function dbFun(){
        return "MongoDB";
    });                             //Angular NodeJS MongoDB;
    */
 /*   
    function mern(arg1){
        console.log( arg1() );
    };
    mern( ()=>{return "Hello"} );       //Hello
*/
/*
function fun_one(param1,param2,param3){
    return param1("Hello_1") + ` ` + param2("Hello_2")+ ` ` + param3("Hello_3"); 
};
fun_one( (arg1)=>{console.log(arg1)},
         (arg1)=>{console.log(arg1)},
         (arg1)=>{console.log(arg1)} );     //Hello_1, Hello_2, Hello_3
*/
/*
    function add(num,callback){
        return callback(num+5,false);
    };
    function sub(num,callback){
        return callback(num-3,false);
    };
    function mul(num,callback){
        return callback(num*2,false);
    };
    function div(num,callback){
        return callback((num/2)-2,false);
    };
    add(5,(addRes,error)=>{
        if(!error){
            sub(addRes,(subRes,error)=>{
                if(!error){
                    mul(subRes,(mulRes,error)=>{
                        if(!error){
                            div(mulRes,(finalRes,error)=>{
                                if(!error){
                                    console.log(finalRes);
                                }
                            });
                        }
                    });
                }
            });
        }
    });           //5

//HOF
//Not an API
//No Catch Block
//Lot of Boiler Code
//Not Easy to Debug
//Nothing to Return

//callback hell (tightly coupled) ===> Promises (loosly coupled)

*/

function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    });
};
function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    });
};
function mul(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    });
};
function div(num){
    return new Promise((resolve,reject)=>{
        resolve((num/2)-2);
    });
};
async function consume(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let final_res = await div(mulRes);
    console.log(final_res);
};
consume();      //5
//Thenable
//Less Boiler Code
//Rich in API
//Promise
//Easy to Debug




