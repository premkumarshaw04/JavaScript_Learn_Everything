Section : 8| Objects

What is objects | Why we create them | How 
When we create objects (real life use cases of objects)
Advantages of objects
Diifference between Arrays and objects
All types of objects
Key Value Structure



Accessing the objects:
    Dot and squre bracket notation, and also diffrence between them

    Why there is two ways to access object values, what is the reason
    ```js
    let obj = {
        name: "harsh",
        age: 26,
        khana: "daal chawal"
    };

    let aa = "name";
    obj.aa; //aa wil not be converted in "name"


    //If we want to convert aa into name
    obj[aa] //harsh  // now we can access the name value of object
    ```



Nesting and deep access || Explain these
    
    ```js
    const user = {
        name: "Harsh",
        address: {
            city : "Bhopal",
            pin : 462001,
            location : {
                lat : 3.2, //latitude
                lng : 77.4 //Longitude
            },
        },
    };

    user.address.location.lng; //77.4
    ```



object destructuring
    ```js
    const user = {
        name: "Harsh",
        address: {
            city : "Bhopal",
            pin : 462001,
            location : {
                lat : 3.2, //latitude
                lng : 77.4 //Longitude
            },
        },
    };

    let {lat, lng} = user.address.location;
    ```
    Now we dont have to write this all the time, we xan directly write lng
    user.address.location.lng;



Looping: for-in, Object.keys, Object.entries

for-in: 
    let obj = {
        name: "harsh",
        age = 26,
        email: "test@test.com"
    };

    for(let key in obj){ // every time all the keys will come in "key" varaible
        console.log(key); //name, age, email

        //If we want to access the values of keys
        obj.key //now this is wrong, this line means we are finding exact "key" word in obj

        obj[key]//Now here square brackets are used
        console.log(obj[key]); // "harsh", 26, "test@test.com"
    }



Object.keys() => what it does, why we use them and how

Object.entries() => what it does, why we use them and how


Copying objects: spread opearator, Object.assign, deep clone

Spread Operator: [what , why , how]
    let obj = {
        name: "harsh",
        age = 26,
        email: "test@test.com"
    };

    let obj2 = {...obj}; // what is happening here explain


Object.assign : it is also used for cpying
[what, why we use it, and how]
    let obj = {
        name: "harsh",
        age = 26,
        email: "test@test.com"
    };

    let obj2 = Object.assign({}, obj); //Explain what is happening in this line
    This same thing can be done via spread operator, so it is not widely used

    also explain some different ways to use object.assign: by giving bland and filled objects as arguments
    let obj2 = Object.assign({Profession : "Teacher"}, obj);



deep clone: What it is, why we use them, and how
use cases and advantages of deep clone

    in case of nested objects, if we use spread opeartor to copy one object in another, then if we make the changes in the second obj, the changes will also be reflected in main(first object)
    [Explain teh reason why it is happening and how we solve this problem using deep clone]

```
    let obj = {
        name: "harsh",
        age = 26,
        email: "test@test.com"
        address: {
            city: "Bhopal"
        }
    };

    let obj2 = {...obj};
    obj2.address.city = "Indore"; || problem here
    name, age and email will be copied and refrence of address will be passed


    Solution:
    let obj2 = JSON.parse(JSON.stringify(obj)) ||Explain

    JSON.strigify  || It will convert the object in strings || JSON.parse (Now string will be converted in object again) [what, why and how]

    Why this solution works and Why spread operator don't

```

Optional chaining,
    what, why we use this concept and in which scenarios it is required | and which problem optional chaining solves
    Advantages of using Optional Chaining


Computed Properties
what, why we use this concept and in which scenarios it is required | and which problem Computed Properties solves
    Advantages of using Computed Properties

    let role = "admin";
    let obj = {
        name: "harsh",
        age: 26,
        email: "test@test.com",
        address: {
            city: "Bhopal",
        },
        [role] : "harsh",
    }; //Now an admin field will be added in the object
