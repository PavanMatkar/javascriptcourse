// to establish relationship between one memory location to another memory location we use call function
// instead of supplying independent values if you want to supply entire array then we use apply function
// if we want to merge two memory location and create a new memory location with the combination of previous two then we use bind function.
// syntax...  let newMemoryLocation =  secondMemoryLocation.bind(firstMemoryLocation)

// let obj = {
//     key1 : "Hello_1"
// };

// function my_fun(){
//     console.log(this.key1);
// };
// my_fun.call(obj);       // Hello_1
/*
    let obj = {
        key1 : 10
    };

    function my_fun(arg1,arg2,arg3){
        console.log(this.key1+arg1+arg2+arg3);
    };

    my_fun.call(obj,20,30,40);      //100

    let arr = [100,200,300];
    my_fun.apply(obj,arr);      //610

    let my_fun1 = my_fun.bind(obj);
    my_fun1(1,1,1);     //13
*/

let obj = {
    key1 : 100,
    key2 : 200,
};
function my_fun(arg1,arg2,arg3){
    console.log(this.key1+this.key2+arg1+arg2+arg3);
};
my_fun.call(obj,300,400,500);       //1500

let arr = [100,200,300];
my_fun.apply(obj,arr);          //900

let my_fun1 = my_fun.bind(obj);
my_fun1(1,2,3);                 //306
