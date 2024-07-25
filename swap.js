/* to swap the value of one variable to aonther. here are two variable if i write first = second and second = first, it means first = 7 and second = existing value 7 as the value of the first variable has already been Changed.  so i need to restore the value of the first variable to give it into second. here i need to use temp variable */

let first = 5;
let second = 7;
console.log(first, second);
let tempo = first;

/* this is the wrong approach
first = second;
second = first;
 */

// approach 1
first = second;
second = tempo;
console.log(first, second);

// approach 2 - desttructiring

[first, second] = [second, first];
console.log(first, second);
