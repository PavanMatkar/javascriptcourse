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