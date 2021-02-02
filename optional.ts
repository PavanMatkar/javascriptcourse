/*
    Optional Parameters
        - while calling the functions, few parameters are optional.
        - optional parameters are introduced in "ES6".
        - we will represent Optional Parameters by using "?".
        - Default value of Optional Parameter is "undefined".
        - Optional Parameters will work in "Typescript" Environment.
        - we will save "Typescript" files with ".ts" extension.
        - conversion of "Typescript" to equalent "Javascript" called as "Transpilation".
        - "tsc" stands for Typescript Compiler.
        => we will install typescript by using following command.
            > npm install -g typescript
*/

/*
    function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
        console.log(arg1,arg2,arg3);
    };
    fun_one();          //undefined undefined undefined
    fun_one("Angular","NodeJS","MongoDB");   //Angular NodeJS MongoDB   
    fun_one("ReactJS");     //ReactJS undefined undefined
    fun_one(undefined,"Deno");      //undefined Deno undefined
    fun_one(undefined,undefined,undefined);     //undefined undefined undefined
    fun_one(null,null,null);        //null null null
*/
/*
    //optional with regular
    //in combination of optional with normal parameter, optional parameter should be in last position.
    
    function fun_one(arg1:string,arg2?:string):void{
        console.log(arg1,arg2);
    };
    fun_one();        //Expected 1-2 arguments, but got 0.
    fun_one("Hello_1");     //Hello_1 undefined
    fun_one("Hello_1","Hello_2");       //Hello_1 Hello_2
*/
/*
//normal, optional parameter, default parameter and rest parameter
function fun_one(arg1:any, arg2:any="Hello_2", arg3?:any,...arg4:any):void{
    console.log(arg1,arg2,arg3,arg4);
};
//fun_one();      //undefined undefined undefined
//fun_one();      //Expected at least 1 arguments but got 0.
//fun_one("Hello_1",undefined,"Hello_3","Hello_4");       //Hello_1, Hello_2, Hello_3, [Hello_4]
//fun_one(undefined,
//      undefined,
//      undefined,
//      undefined);     //undefined Hello_2 undefined [undefined]
fun_one(null,null,null,null);       //null null null [null]
*/