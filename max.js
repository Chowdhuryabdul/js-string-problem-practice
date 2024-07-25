// this is among two numbers 
const jimMark = 85;
const delaMark = 75;
if(jimMark > delaMark){
    console.log('jim will get the cake');
}else{
    console.log('dela will get the cake');
}

// this is for more than 2 numbers 

// appraoch - 1 

let jim = 30;
let dela = 50;
let chinku = 33;

if(jim > dela && jim > chinku){
    console.log('jim will eat the cake');
}else if(dela > jim && dela > chinku){
    console.log('dela obviously deserves the cake');
}else{
    console.log('chinku will eat the cake finally')
}

// approach-2-- math.max or math.min


let number1 = 30;
let number2 = 50;
let number3 = 45;
if(number1 > number2 && number1 > number3){
    console.log('the greatest number is the number1');
}else if(number2 > number1 && number2 > number3){
    console.log('the greatest number is number2')
}else{
    console.log('the number3 is the greatest')
}

let findTheGreatestNumber = Math.max(number1, number2, number3);
console.log(findTheGreatestNumber);
let findTheSmallestNumber = Math.min(number1, number2, number3);
console.log(findTheSmallestNumber);


function smallestNumber(number1, number2, number3){
    return Math.min(number1, number2, number3);
}
console.log(smallestNumber(number1, number2, number3));

// find the sum of an array 
function jerry(x){
    let sum = 0;
    for(let item of x){
        sum+= item
    }
    return sum
}

let jerrysNumber = [20, 13, 37]
let totalNumber = jerry(jerrysNumber)
console.log(totalNumber)


let x = 157;
let y = 134;
let z = 188;
function tallest(x, y, z){
    return Math.max(x, y, z)
}
console.log(tallest(x, y, z))
