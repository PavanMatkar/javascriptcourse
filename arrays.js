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
    - to find the index of partucular element.

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







