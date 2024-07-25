// how to rdo character reverse 

function reverseString(string){
    let reversed = ''; /* it is for the making reversed word */
    for(/* let i = 0; i < string.length; i++ */  /* this is the normal loop but if i want run the loop in reverse way than i need to wrtie */
        let i = string.length-1; i >= 0; i-- ){ /* this is the i need to write for the reverse loop and -1 means in the arrya if there are 4 elemnts, the index will start from 0*/
        const element = string[i];
        reversed = reversed + element; /* it is for the making reversed word */
        console.log(element, reversed)
    }
    return reversed
}

const theString = 'i love in norway for a long period of time'
console.log(reverseString(theString));
