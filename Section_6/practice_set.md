practice: 

1. explain and predict the output

```js
greet();

function greet(){
    console.log("Hello");
}
```

2. convert this function into an arrow function

```js
function multiply(a, b){
    return a * b;
}
```

3. Identify parameters and arguments

```js
function welcome(name){
    console.log(name);
}
welcome("Harsh");
```

4. How many parameters does this function have and how many arguments are passed.
```js
function demo(a,b,c){
    
}
demo(1,2); //in output c will be undefined
```

5. predict the output

```js
function sayHi(name = "Guest"){
    console.log("Hi", name);
}
sayHi();
```

6. what does the ... operator means in parameters

```js
function abcd(...val){
    console.log(val)
}
abcd(1,2,3,4,5,6);

//val will be an array

```

7. use rest parameter to accept any number of scores and return the total

```js
    function getScore(...scores){
        let total = 0;
        scores.forEach(function(val){
            //scores ke har ek value ke liye function chalega, har baar ek ek value, val ke andar aayegi
            total = total + val;
        });
        return total;
    }

    console.log(getScore(10, 12, 14, 18)); //54
```

8. fix the function using early return 

```js
function checkAge(age){
    if(age < 180){
        console.log("Too young");
    }
    else{
        console.log("Allowed");
    }
}

console.log(checkAge(23));
```

the solution will be:
```js
function checkAge(age){
    if (age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(23));
```

9. What is the return value of the function
```js
function f(){
    return;
}
console.log(f()); //undefined
```

10. can u assign a funxtion to a variable and then call it? show how.

11. pass a function into another function and execute it inside.
```js
function abcd(val){
    val();
}

abcd(function(){
    console.log("Hello");
});
```

12. 
```js
[1,2,3].map(function(x){
    return x * 2;
})
```

13. wheather the function is pure or not

```js
let total = 0;
function addToTotal(num){
    total += num;
}
```

14. Convert this function into a pure function
```js
let total = 0;
function addToTotal(num){
    total += num;
}
```

15. what is closure? When it is created?

16. Predict the output:
This is the example of closure
```js
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); //1
counter(); //2
```

17. Covert this normal function into an IIFE
```js
function init(){
    console.log("Initialized");
}
```

solution:
```js
(function init(){
    console.log("Initialized");
})();
```

18. What is the use of IIFE? Name one real world use case.
=>to make private varaible, which is nota accessible outside the function

19. What will be the output here and why?
```js
greet();

var greet = function(){
    console.log("Hi");
};

//error will come , why explain | It is realted to Hoisting
```

20. What will be the output here and why
```js
greet();

function greet(){
    console.log("Hi");
};
```

21. write a BMI calculator
// weight should be in Kg and hight should be in meters, this is needed to calculate BMI
```js
function bmi(weight, height){
    return weight / (height * height);
}

console.log(bmi(69, 1.7).toFixed(2)); //weight is 69 kgs and height is 1.7 meters

// what does toFixed() does in js. -> It sets the precision after decimal
```

22. create a reusable discount calculator with the help of Higher order functions
```js
function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    };
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
ten(1200);
twenty(1600);

//explain the whole what id happening
```

23. Build a counter using closure
Explain these code in simple terms (this code is based on counter) 
```js
function counter(){
    let count = 0;
    return function (){
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(d());
```

24. Create a pure function to transform a value


25. Use IIFE to isolate variables


