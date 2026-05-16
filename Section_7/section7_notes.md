section : 7 | Arrays

arrays in javascript is diffrent from another languages,( how it is diffrent givce the reasons)

use cases of Arrays in javascript

indexing starts from 0 in arrays

How we create an array(explain all possible ways)
    let arr = [1,2,3,4,5]
    let arr = new Array() //explain what is happening here

How to access values in arrays

Modify arrays

lets dive into Arrays methods 
    push, pop, shift, unshift, splice, slice, reverse ,sort,

    (explain all the methods in simple term, explain what and how are these doing) and add use cases of every methods.

    splice: It changes the actual array
        let arr = [1,2,3,4,5];
        arr.splice(2, 2); //2nd index se two values ko remove karna hai, output will be: [1,2,5]

    slice: It returns a new copy of array, does not change the actual array
    let arr = [1,2,3,4,5];
    let newArr = arr.slice(0, 3); //it will remove from 0th index and remove uptill "3-1 = 2nd index", in new array u will get [1,2,3,4], your main array will remain same

    sort:
        it always accepts a function
        ```js
        let arr = [11,62,3,4,25];
        let sr = arr.sort(function(a,b){
            return a-b;
        });

        by writing a - b, it will be sorted in ascending order and by b-a it will be sorted in descending order
        ```

difference between shift , unshift
diifrence between slice and splice
in between slice and splice, which is good and why





Lets dive into some imprtant methods:
map, filter, reduce, find, some, every [explain every method in simple terms and also give their use cases, I am also writing about them, take the reference from that also]
    when we apply foreach, sort, map, filter, reduce on Arrays, one thing is common they accept a function

    1. Lets first understand forEach:
    //array ke har ke liye ek function chalegaa and baar baar val me ek value aayegi, and andar likh hua code ek baar chalega, array ke each element ke liye
    
    ```js
    let arr = [11,62,3,4,25];

    arr.forEach(function(val){
        console.log(val);
    })
    ```

    2. map
    map sirf tab use karna hai jab aapko ek naya array banana hai, based on the data of previous array

    as soon as you see a map, visualize a blank array in your head.
    
    Now map method ke andar ka function jo jo return karega usko blank array me insert karte rehna 

    ```js
    let arr = [11,62,3,4,25]

    let newArr = arr.map(function(val){
        return 12;
    });


    //for the fisrt value 11, 12 will be returned
    //for 32: 12 returned
    // same for remaining elements

    ultimately an array will be formed in which you will have five times 12.

    //newArr = [12,12,12,12,12]

    Note: map is simliar to foreach, but we have to use return mandatorily.

    If we are not returning, then in our new array, five times undefined will be stored

    //newArr = [undefined, undefined, undefined, undefined, undefined]

    If we are not returning anything, then undefined will be returned.
    ```

    Lets understand it by a scenario...

    ```js
    let arr = [11,32,3,4,25];

    let newArr = arr.map(function(val){
        if(val > 10) return val;
    });

    //output: [11, 32, undefined, undefined, 25]
    ```

    So how can we idetify, when and where to use map
        in such type of cases where u can see that a new array will be formed from an array, and that new array will be keep some values, then we will use map



    3. filter
    Same as map, in filter also a new array will be made
    it take some members from previous array into new array

    here we return boolean values
        true means particular value will go in new array
        false means, that value will not go in new array


    example:
    make a new array in which keep only that elements which are bigger than 4, take elements from the given array

    ```js
    let arr = [1,2,3,4,5,6,7,8];
    let newArr = arr.filter(function(val){
        if(val > 4) return true;
        //and the elements that are lesser they will be discarded
    })
    //output: [5,6,7,8]
    ```

    4.reduce
    Process of reducing a big array in a single value

    example: return the sum of all the elements of the array

    ```js
    // explain each and every part of the code
    //Dry run this code and so that I can visualize what is happening
    let arr = [1,2,3,4,5,6];

    let ans = arr.reduce(function(accumulator, val){
        return accumulator + val;
    }, 0);

    // Output: 21
    
    ```

    Accumulator remembers its value and keep updating it through out all the iterations even after returning it updates its value, that 0 which we have defined at the end, is the initial value of accumulator



    5. find:
    in your array the first element that satisfieses the condition, that element will be returned
    
    example:
    ```js
    //this is an array, that contains three elements, which are objects, we need to return that fisrt element which has key 1

    let arr = [   
        {id: 1, key: 1},
        {id: 2, key: 2},
        {id: 3, key: 1}
    ];

    let ans = arr.find(function (val){
        return val.key === 1;
    });

    //output: ans = {id: 1, key: 1}
    ```



    6. Some
    expalin what some is and what it does and its use cases

    example: if the array of scores, find that, is there any student who has scored more than 85

    ```js
    let arr = [10,30,32,90]
    let ans = arr.some(function(val){
        return val > 85;
    });

    // Output: True
    ```



    7. every
    expalin what some is and what it does and its use cases

    It checks that all elements are passing the condition or not, it is basically the opposite of "some"

    ```js
    let arr = [10, 30, 32, 90];

    let ans = arr.every(function(val){
        return val > 5; //checking that all elements are greater than 5 or not
    });

    // output: True
    ```

Destructuring and Spread Operators






