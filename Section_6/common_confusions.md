lets move to common confusions

1.  Arrow vs regular function. when to use Arrow or when to use regular function
    we can use fat arrow funstion every where except in one place, which is in object.

    ```js
    //explain this in simple terms, you can use another example if u have
    const obj = {
        value: 42,
        regular: function() { return this.value;},
        arrow: () => this.value
    };

    //here we can not use arrow funstion, because if we do so the this keyword will loose the value
    ```

2. function hoisting and the impact of Temporal dead zone on it [explain why]

```js
greet();    //works //hoisting is performed here
function greet(){}

greet();    //error //we are calling this in temporal dead zone, 
const greet = () => {};
```

3. which are the times or scenarios when hositing works in the function

4. difference between closures and higher order functions
closre: function return function, but the returning function will use some variable of parent function
