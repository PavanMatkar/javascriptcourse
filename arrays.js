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

console.log([1,2,3,4,5].reduce((firstElement,nextElement)=>{
    return firstElement + nextElement;
}));        //15