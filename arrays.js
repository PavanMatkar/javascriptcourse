//Array
//Collection of Indexed Elements called as array.
//[]
//we will access array elements by using "indexes"

/*
    //map()  ES6
    let arr1 = [1,2,3,4,5];
    let arr2 = arr1.map((element,index)=>{
        return element*10;
    });
    console.log(arr1);      //[ 1, 2, 3, 4, 5 ]
    console.log(arr2);      //[ 10, 20, 30, 40, 50 ]

    console.log([10,20,30,40,50].map((element,index)=>{
        return "$ " + element;
    })
    );              //[ '$ 10', '$ 20', '$ 30', '$ 40', '$ 50' ]
*/

/*
    //filter()      //ES6
    //used to create the new array based on condition
    console.log([10,20,30,40,50].filter((element,index)=>{
        return element <= 30;
    }));        //[ 10, 20, 30 ]
    console.log([1,2,3,4,5,6,7,8,9,10].map((element,index)=>{
        return element*10;
    }).filter((element,index)=>{
        return element >= 50;
    }));        //[ 50, 60, 70, 80, 90, 100 ]
*/

//reduce()      ES6
//used to find the sum of array elements 
/*
    console.log([1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement + nextElement;
    }));        //15
*/
/*
    console.log([1,2,3,4,5].map((element,index)=>{
        return element;
    }).filter((element,index)=>{
        return element <= 5;
    }).reduce((firstElement,nextElement)=>{
        return firstElement + nextElement;
    }));        //15
*/

/*
    reduceRight()
        - used to perform summation from right to left 

    console.log(["ReactJS", "To", "Welcome"].reduceRight((firstElement,nextElement)=>{
        return firstElement + " " + nextElement;
    }));        //Welcome To ReactJS
*/

/*
    //concat()      <ES6
    //...
    let arr1 = ["ReactJS"];
    let arr2 = ["NodeJS"];
    let arr3 = ["MongoDB"];
    let arr4 = arr1.concat(arr2,arr3);
    console.log(arr4);          //[ 'ReactJS', 'NodeJS', 'MongoDB' ]

    //ES6
    //...
    let arr5 = [...arr1,...arr2,...arr3];
    console.log(arr5);          //[ 'ReactJS', 'NodeJS', 'MongoDB' ]
*/

/*
    //find()
    //used to perform the search operation
    console.log([1,2,3,4,5].find((element,index)=>{
        return element === 50;
    }))     //5     //undefined
*/

/*
    //some()
    //if atleast one element satisfies the condition then it will return true otherwise false
    console.log([1,2,3,4,5].some((element,index)=>{
        return element <= 1;
    }));    //true
*/

/*
    //every()
    //if all elements satisfies the condition, then it will return true otherwise false
    console.log([10,20,30,40,50].every((element,index)=>{
        return element <= 50;
    }));        //true
*/
/*
//push()
//pop()
//unshift()
//shift()
    let arr = [20,30,40];
    console.log(arr);       //[ 20, 30, 40 ]
    arr.push(50);
    console.log(arr);       //[ 20, 30, 40, 50 ]
    arr.unshift(10);
    console.log(arr);       //[ 10, 20, 30, 40, 50 ]
    arr.pop();
    console.log(arr);       //[ 10, 20, 30, 40 ]
    arr.shift();
    console.log(arr);       //[ 20, 30, 40 ]
*/
/*
splice()
    - used to remove/add elements at any index of Array
    - mutable

    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr);       //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100];
    arr.splice(4,2);
    console.log(arr);       //[10, 20, 30,  40, 70, 80, 90, 100];
    arr.splice(3,1);
    console.log(arr);       //[10, 20,  30, 70, 80, 90, 100];
    arr.splice(4,2);
    console.log(arr);       //[ 10, 20, 30, 70, 100 ]
    arr.splice(0,1);
    console.log(arr);       //[ 20, 30, 70, 100 ];
    arr.splice(3,1);
    console.log(arr);       //[ 20, 30, 70 ];
    arr.splice(1,1,30,40,50,60);
    console.log(arr);       //[ 20, 30, 40, 50, 60, 70 ];
    arr.splice(0,0,10);
    console.log(arr);       //[10, 20, 30, 40, 50, 60, 70];
    arr.splice(7,0,80,90,100);
    console.log(arr);       //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100];
*/
/*
findIndex()
    - to find the index of particular element.

    let arr = [10,20,30,40,50];
    console.log(arr.findIndex((element,index)=>{
        return element === 30;
    }));        //2
    console.log(arr.findIndex((element,index)=>{
        return element === 300;
    }));        //-1
    
    let arr1 = [{"p_id":111,"p_name":"p_one","p_cost":10000},
                {"p_id":222,"p_name":"p_two","p_cost":20000},
                {"p_id":333,"p_name":"p_three","p_cost":30000},
                {"p_id":444,"p_name":"p_four","p_cost":40000},
                {"p_id":555,"p_name":"p_five","p_cost":50000}];
    console.log(arr1.findIndex((element,index)=>{
        return element.p_id === 333;
    }));        //2
    arr.splice(arr.findIndex((element,index)=>{
        return element === 40;
    }),1);
    console.log(arr);       //[ 10, 20, 30, 50 ]
    arr1.splice(arr1.findIndex((element,index)=>{
        return element.p_id === 222;
    }),1);
    console.log(arr1);      //[
                            //  { p_id: 111, p_name: 'p_one', p_cost: 10000 },
                            //  { p_id: 333, p_name: 'p_three', p_cost: 30000 },
                            //  { p_id: 444, p_name: 'p_four', p_cost: 40000 },
                            //  { p_id: 555, p_name: 'p_five', p_cost: 50000 }
                            //  ]
*/

//slice()
//get the selected items
/*
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr1.slice(5,7));       //[ 60, 70 ]
    console.log(arr1.slice(7,9));       //[ 80, 90 ]
    console.log(arr1.slice(2,5));       //[ 30, 40, 50 ]
    console.log([...arr1.slice(7,10),...arr1.slice(0,3)]);      //[ 80, 90, 100, 10, 20, 30 ]
*/
/*
    let arr2 = [0,1,2,3,4,5,6,7,8,9];
    let a1 = arr2.slice(5);
    let a2 = arr2.slice(0,5);
    let a3 = a2.concat(a1);
    console.log(a3);                //[0, 1, 2, 3, 4,5, 6, 7, 8, 9]
    console.log([...a2,...a1]);     //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
/*
    let arr3 = [100,200,300,400,500,600,700,800,900,10000];
    console.log(arr3.slice(-6,-4));     //[ 500, 600 ]
    console.log(arr3.slice(-9,-6));     //[ 200, 300, 400 ]
    console.log(arr3.slice(-10,-9));    //[ 100 ]
    console.log(arr3.slice(-1));        //[ 10000 ]
*/
/*
//copyWithin()
let arr1 = [10,20,30,40,50,60,70,80,90,100];
arr1.copyWithin(3);
console.log(arr1);      //[10, 20, 30, 10, 20, 30, 40, 50, 60, 70]
let arr2 = [10,20,30,40,50,60,70,80,90,100];
arr2.copyWithin(5);
console.log(arr2);      //[10, 20, 30, 40, 50, 10, 20, 30, 40, 50]
let arr3 = [10,20,30,40,50,60,70,80,90,100];
arr3.copyWithin(10);
console.log(arr3);      //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
let arr4 = [10,20,30,40,50,60,70,80,90,100];
arr4.copyWithin(0);
console.log(arr4);      //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
let arr5 = [10,20,30,40,50,60,70,80,90,100];
arr5.copyWithin(2,5);
console.log(arr5);      //[10, 20, 60, 70,  80, 90, 100, 80, 90, 100]
let arr6 = [10,20,30,40,50,60,70,80,90,100];
arr6.copyWithin(1,4);
console.log(arr6);      //[10, 50, 60, 70,  80, 90, 100, 80, 90, 100]
let arr7 = [10,20,30,40,50,60,70,80,90,100];
arr7.copyWithin(8,9);
console.log(arr7);      //[10, 20, 30,  40,  50, 60, 70, 80, 100, 100]
let arr8 = [10,20,30,40,50,60,70,80,90,100];
arr8.copyWithin(2,4,7);
console.log(arr8);      //[10, 20, 50, 60,  70, 60, 70, 80, 90, 100]
let arr9 = [10,20,30,40,50,60,70,80,90,100];
arr9.copyWithin(0,0,10);
console.log(arr9);      //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
*/
/*
    //includes()
    console.log([10,20,30,40,50].includes(30));     //true
    console.log(["Angular","NodeJS","ReactJS","VueJS","MongoDB",].includes("Angular11"));    //false
*/
/*
    // sort()
    console.log([10,50,20,40,30].sort((arg1,arg2)=>{
        return arg1-arg2;
    }));        //[ 10, 20, 30, 40, 50 ]
    console.log([10,50,20,40,30].sort((arg1,arg2)=>{
        return arg2-arg1;
    }));        //[ 50, 40, 30, 20, 10 ]
    console.log([10,50,20,40,30].sort((arg1,arg2)=>{
        return arg1-arg2;
    })[0]);     //10 (min element)
    console.log([10,50,20,40,30].sort((arg1,arg2)=>{
        return arg2-arg1;
    })[0]);     //50 (max element)
*/
/*
//indexOf()
    let arr1 = [10,20,10,40,20,30,10,20];
    arr1.forEach((element,index)=>{
        console.log(arr1.indexOf(element));
    });     //0 1 0 3 1 5 0 1
    let arr2 = [40,80,20,40,20,50,10,80,40];
    arr2.forEach((element,index)=>{
        console.log(arr2.indexOf(element));
    });     //0 1 2 0 2 5 6 1 0
    let arr3 = [10,20,30,10,20,30];
    console.log(arr3.filter((element,index)=>{
        return arr3.indexOf(element) == index;
    }))     //[ 10, 20, 30 ]
    let arr4 = [10,30,20,10,50,10,30];
    console.log(arr4.filter((element,index)=>{
        return arr4.indexOf(element)===index;
    }).sort((arg1,arg2)=>{
        return arg2 - arg1;
    }));        //[ 50, 30, 20, 10 ]
*/
/*
//length
//used to know the length of array

    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr.length);        //10
    console.log(arr[0],arr[4],arr[9]);      //10 50 100
    console.log(arr[10],arr[-1]);       //undefined undefined

    arr.length = 5;
    console.log(arr.length);        //5
    console.log(arr[0],arr[4],arr[5]);      //10 50 undefined
*/
/*
//delete
let arr = [10,20,30,40,50];
console.log(arr.length);        //5

delete arr[2];
console.log(arr);       //[ 10, 20, <1 empty item>, 40, 50 ]
*/
/*
//fill()
//    - replace the elements 
    let arr = [10,20,30,40,50];
    arr.fill(100);
    console.log(arr);       //[ 100, 100, 100, 100, 100 ]
    arr.fill(200,2);
    console.log(arr);       //[ 100, 100, 200, 200, 200 ]
    arr.fill(300,1,3);
    console.log(arr);       //[ 100, 300, 300, 200, 200 ]
*/
/*
//flat()
    let arr = [[1], [2,3], [4], [5,6]];
    console.log(arr.flat(1).reduce((a,b)=>{
        return a+b;
    }));                //21

    let arr = [1,[[[[[[[[[[2]]]]]]]]]]];
    console.log(arr.flat(Infinity).reduce((arg1,arg2)=>{
        return arg1+arg2;
    }));                //3

    let arr1 = [1,2,3,4,5];
    let arr2 = ["one","two","three","four","five"];

    console.log(arr1.map((element,index)=>{
        return [element,arr2[index]];
    }));        //[[1,'one'],[2,'two'],[3,'three'],[4,'four'],[5,'five']]       

    console.log(arr1.map((element,index)=>{
        return [element,arr2[index]];
    }).flat(1));        //[ 1, 'one', 2, 'two', 3, 'three', 4, 'four', 5, 'five']

    console.log(arr1.flatMap((element,index)=>{
        return [element,arr2[index]];
    }));                //[ 1, 'one', 2, 'two', 3, 'three', 4, 'four', 5, 'five']
*/
/*
    //reverse
    let arr = [10,20,30,40,50];
    console.log(arr.reverse());     //[ 50, 40, 30, 20, 10 ]

    console.log(Array.from("Hello").reverse().join(""));        //olleH
    console.log(Array.from("Hello").reverse().toString().replace(",",""));      //ol,l,e,H
    console.log(Array.from("Hello").reverse().toString().replace(/,/g,""));     //olleH
*/
/*
    //repeat()
    console.log("10".repeat(2));        //1010
    console.log("Hello".repeat(5));     //HelloHelloHelloHelloHello
*/
/*
    //lastIndexOf()
    let arr = [10,20,30,40,50,10,20,30,40,50];
    console.log(arr.lastIndexOf(10));       //5
    console.log(arr.lastIndexOf(20));       //6
    console.log(arr.lastIndexOf(60));       //-1
*/
/*
    console.log(
        Array.from("Hello").reverse().join("")
        );        //[ 'H', 'e', 'l', 'l', 'o' ]
                //[ 'o', 'l', 'l', 'e', 'H' ]
                //o,l,l,e,H       (toString())
                //olleH           ( join() )
*/
/*
    console.log(" Hello ".length);              //7
    console.log(" Hello ".trim().length);       //5
    console.log(" Hello ".trimStart().length);  //6
    console.log(" Hello ".trimEnd().length);    //6
*/
/*
    console.log("Hello".padStart(10,"*"));        //*****Hello
    console.log("Hello".padEnd(20,"ReactJS"));    //HelloReactJSReactJSR
*/
/*
    console.log("Hello Hello".split(" "));      //[ 'Hello', 'Hello' ]
    console.log("He,l,|,l,o".replace(/,/g,"").replace("|","").split(""));   //[ 'H', 'e', 'l', 'l', 'o' ]
*/
/*
    console.log(
        "Welcome to ReactJS".substr(0,7),
        "Welcome to ReactJS".substr(8,2),
        "Welcome to ReactJS".substr(11)
    );              //Welcome to ReactJS
*/
/*
    console.log(
        "Hello Welcome to Angular11".substring(0,5),
        "Hello Welcome to Angular11".substring(6,13),
        "Hello Welcome to Angular11".substring(14,16),
        "Hello Welcome to Angular11".substring(17)
    );                  //Hello Welcome to Angular11
*/
/*
    // for...in
    let obj = {"key1": "Hello_1",
            "key2": "Hello_2",
            "key3": "Hello_3"};
    for(let key in obj){
        console.log(obj[key]);
    };      //Hello_1 Hello_2 Hello_3

    for(let x of [10,20,30,40,50]){
        console.log(x);
    };      //10 20 30 40 50
*/









