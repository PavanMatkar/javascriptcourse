//variable
//variables are used to store the data 
//Ex. string, number, boolean, objects,.....
//we will define the variables by using "var","let","const"
//"let" and "const" keyword introduced in ES6.
//variables should contain a-z,A-Z,0-9,$ and _(underscore)
//variables should not start with digits
//syntax
//var/let/const variablename = value;

//string
//group of characters called as string
//we will represent string with ""(double quotes),''(single quotes) and ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) also called as template literal
//``(backtick) operator used to define the paragraphs

var sub = "FullStack UI";
var wish = `Welcome to ${sub}`;
console.log(wish);      //Welcome to FullStack UI


var sub_one = 'ReactJs';
var sub_two = 'NodeJS';
var sub_three = 'MongoDB';
var mern = `MERN Stack : ${sub_one} <=> ${sub_two} <=> ${sub_three}`;
console.log(mern);      //MERN Stack : ReactJs <=> NodeJS <=> MongoDB

var tbl_name = 'employees';
var uname = 'admin';
var upwd = 'admin1';
var login_query = `select * from ${tbl_name} where uname = '${uname}' and upwd = '${upwd}'`;
console.log(login_query);       //select * from employees where uname = 'admin' and upwd = 'admin1'


//number
//1)decimal 2)double 3)hexadecimal 4)octal 5)binary
//hexadecimal number should prefix with "0x"
//octal number should prefix with "0o"
//binary number should prefix with "0b"
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0xABC123;
var octalNum = 0o123;
var binaryNum = 0b1010;
console.log(decimalNum,doubleNum,hexadecimalNum,octalNum,binaryNum);    //100 100.12345 11256099 83 10

//boolean datatype
//true or false
var flag = true;
console.log(flag);      //true

//bigint
//2^63 to -2^63 -1
//bigint datatype will represent with "n" (suffix)
var my$number = 123456789123456789123456789123456789123456789123456789n;
console.log(my$number);     //123456789123456789123456789123456789123456789123456789n


//Symbol
//Security to data
var my_data = Symbol("ReactJS");
console.log(my_data);       //Symbol(ReactJS)

//==(value)===(value & datatype)
console.log( 10 == "10" );  //true
console.log( 10 == "ten" ); //false
console.log( 10 === "10" ); //false

console.log( undefined == undefined );  //true
console.log( undefined === undefined ); //true
console.log( null == null );    //true
console.log( null === null );   //true
console.log( undefined == null );   //true
console.log( undefined === null );  //false

//array
//collection of indexed and hetrogeneous elements called as array
//[]
//forEach()     (ES6)
var arr1 = [10,20,30,40,50];
var arr2 = [60,70,80,90,100];

arr1.forEach((element,index)=>{
    console.log(element,arr2[index]);
});
var f_subs = [`Angular`, `ReactJS`, `VueJS`];
var b_subs = [`NodeJS`, `Deno`, `SpringBoot`];
f_subs.forEach((element,index)=>{
    console.log(element,b_subs[index]);
});

//JSON 
//Java Script Object Notation
//JSON is light weight
//JSON is easy to parse
//objects---->{}    arrays---->[]
//data---->key & value pairs, key & value separated by using ":",pairs separated by using ","
var obj = {
    sub_one: "ReactJS",
    sub_two: "NodeJS",
    sub_three: "MongoDB"
};
console.log( obj.sub_one,obj.sub_two,obj.sub_three );  //ReactJS NodeJS MongoDB

//var 123$ = "hello";   //variable declaration expected

var $abc123 = "Hello";
var _abc123 = "Welcome";
var _123abc = "Hello";
//var abc#123 = "Welcome";  //Invalid character

/* 
    for(let i=0;i<5,i++){

    };
    console.log(i);     //var:5     //let:Refrence Error: i is not defined(ES6)

    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/

//global variable
let data = 100;
//block
{
    //local variable
    let data = 200;
}
console.log(data);      //let:100       //var:200
//is global member affected by local member called as global polluting issue
//global polluting issue raised because of var keyword
//we can overcome global polluting issue by using let keyword


/*
    //global variable
    let data = 100;
    //block
    {
        //local variable
        let data = 200;
    }
    console.log(data);      //let:100     //var:200
    //if global member effected by local member called as global polluting issue
    //global polluting issue raised because of var keyword
    //we can overcome global polluting issue by using let keyword
/*

/*
    let data = 100;
    let data = 200;
    console.log(data);      //let:SyntaxError:Identifier 'data' has already been declared   //var:200
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/

/*
console.log(data);      //let:Error     //var:undefined
var data = 100;
//accessing the variables with undefined value, before its declaration and initialization called as variable hoisting
//"var" keyword allows the variable hoisting
//we can overcome variable hoisting by using "let" keyword
*/

/*
    for(let i=0;i<5;i++){
        setTimeout(()=>{
            console.log(i);
        },5000);
    };      //var:5 5 5 5 5     let:0 1 2 3 4
*/



/**********************************************************************************
                var                                         let
    var keyword introduced in ES11              let keyword introduced in ES6
    
    duplicate variables allowed                 won't allows the dupclicate variables

    global polluting issue raised               we can overcome global polluting issue

    variable hoisting issue raised              we can overcome variable hoisting issue

    scope rule break by var keyword             scope rule obey by let keyword
 **********************************************************************************/

 //const 
 //we can't modify the data (const)
 //ES6
 const data = 100;
 console.log(data);     //100
 //data = 200;      //TypeError:Assignment to constant variable

 /*
    const obj1 = {wish: "ReactJS"};
    console.log(obj1);      //{wish: "ReactJS"}
    //obj1 = {};    //TypeError:Assignment to constant variable
    obj1.wish = "Welcome to ES11";
    console.log(obj1);      //{wish:"Welcome to ES11"}
    //obj1 = {wish: "Welcome to ReactJS"};      //TypeError: Assignment to constant variable  
*/

/*
const obj1 = {key1: 'Hello_1', key2: 'Hello-2'};
console.log(obj1);  //{key1: 'Hello_1', key2: 'Hello_2'};
//obj1 = {};        //TypeError:Assignment to constant variable
//obj1 = {key1: "Welcome_1", key2: "Welcome_2"};        //TypeError:Assignment to constant variable
obj1.key1 = "Welcome_1";
obj1.key2 = "Welcome_2";
console.log(obj1);      //{key1: "Welcome_1", key2: "Welcome_2"}
const arr = [10, 20, 30, 40, 50];
console.log(arr);       //[10, 20, 30, 40, 50]
//arr = [];        //TypeError:Assignment to constant variable
//arr = [100, 200, 300, 400, 500];      //TypeError: Assignment to constant variable
arr[0] = 100;
arr[1] = 200;
arr[2] = 300;
arr[3] = 400;
arr[4] = 500;
console.log(arr);       //[100, 200, 300, 400, 500]
//direct change of values not possible, but we can change independently.
*/