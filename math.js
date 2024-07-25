// how to find the 3 to the power of 8

const result = Math.pow(3, 8) /* here 3 is the power and the 8 is the base */
console.log(result)

/*  to find the gap betwenn two numbers whether more or less */

const hisAge = 30;
const herAge = 45;

const gap =Math.abs(hisAge - herAge);

if (gap < 5){ /* here i have said if gap is less than 5 but the realgap is 15, then why it says 'you guys can marry' because the subtraction number is -15(second number is bigger than the first one) so it is smaller than 5. so to avoid this we will use Math.abs */
    console.log('you guys can marry')
}
else{
    console.log('can not even closer')
}

// make a round number

const number = 2.5
const fullNumber = Math.round(number)
console.log(fullNumber)

// want to get the upper intger or lower integar of fraction number

const upperIntegar = Math.ceil(number)
console.log(upperIntegar)

const lowerIntegar = Math.floor(number);
console.log(lowerIntegar);


// Random- it will give you random number. it usually give 0-1 number
console.log(Math.random())

/* but if i need the number from 1-100 */

const randomNumberFromZeroToHundered = Math.random()*100;
console.log(randomNumberFromZeroToHundered)

/* if want to get full number */

const fullNumberThroughRandom = Math.round(Math.random()*100);
console.log(fullNumberThroughRandom);


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math