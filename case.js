/* -----> if want to compare the string, so it is better to make all the string in lower case. */

const userName = 'blackPink'
const userInput = 'blackPinK'

if(userName.toLowerCase === userInput.toLowerCase){ /* here i need to make them lower case */
    console.log('valid return')
}
else{
    console.log('invalid return')
}


const firstPart = 'is Norway beautiful'
const secondPart = 'Is norway Beautiful'

if(firstPart.toLowerCase === secondPart.toLowerCase){
    console.log('give me valid return')
}else{
    console.log('give me invalid return')
}
/* make this as sentence */
const addParts = [firstPart, secondPart];
const joinParts = addParts.join('; ')
console.log(joinParts);

console.log(addParts.length)

