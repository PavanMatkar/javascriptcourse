// passing one function to another function as an argument called as callback 

function fun_one(arg1){
    console.log(arg1());
};
fun_one(function fun_two(){
    return "Hello";
});                             //Hello