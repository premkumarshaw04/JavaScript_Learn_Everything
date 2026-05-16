Lets move to common confusions

1. Splice Vs Slice
    Splice will change the original array but using slice it will not affect the original array

    The main thing splice remove the particular values that u want to but slice just takes out the values by not changing the original one
    
2. When to use Splice and Slice : give me some scenarios

3. when to use map and when to use forEach
    there is no return in forEach
    forEach doesnot make new array directly

    but when we have to make a new array from previous array, we use map and we can return something, and whatever we return that will go into new array

4. Big blunder with .sort()

```js
[100, 20, 3].sort(); // [100, 20, 3] -> "100", "20", "3" [wrong] || Explain why it is a proble and solution also
```

you have given a numerice array, why .sort() makes every element of this array as string, (why there is a problem with numeric array)

what will be the correct way to do :
arr.sort((a, b) => a-b); //array will be sorted in ascending order beacuse of a-b



