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
    */
function fun_one(arg1, arg2) {
    console.log(arg1, arg2);
}
;
fun_one(); //Expected 1-2 arguments, but got 0.
fun_one("Hello_1"); //Hello_1 undefined
fun_one("Hello_1", "Hello_2"); //Hello_1 Hello_2
