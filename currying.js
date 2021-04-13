// converting tightly coupled business logic to loosely coupled business logic called as currying.
/*
    let fun_one = (arg1) => {
        console.log(arg1);
        return (arg2) => {
            console.log(arg1+arg2);
            return (arg3) => {
                console.log(arg1+arg2+arg3);
            };
        };
    };
    fun_one(10)(20)(30);        
*/

let fun_one = (arg1)=>{
    console.log(arg1);
    return fun_two;
};

let fun_two = (arg1,arg2)=>{
    console.log(arg1+arg2);
    return fun_three;
};

let fun_three = (arg1,arg2,arg3)=>{
    console.log(arg1+arg2+arg3);
};

fun_one(10)(10,20)(10,20,30);