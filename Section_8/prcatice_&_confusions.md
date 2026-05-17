Practice: Solve and explain 

1. create an Object for a student with name, age and isEnrolled.               

2. can an object key be a number or boolean? Try this
    ```js
    {
        true: "Yes",
        42: "answer"
    };
    console.log(obj[42]);
    ```
3. Access the values of "first-name" from this object:
const user = {
    "first-name" : "Harsh",
};
user["first-name"] //why it is allowed 
user.first-name // and why it  is not

4. Given a dynamic key
let key = "age", how will you access user[key]?             

```js
let key = "age";
const user = {
    age: 26,
};


user[key] //26
```