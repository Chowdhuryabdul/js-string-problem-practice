/* -----> if want to compare the string, so it is better to make all the string in lower case. */

const userName = 'blackPink'
const userInput = 'blackPinK'

if(userName.toLowerCase === userInput.toLowerCase){ /* here i need to make them lower case */
    console.log('valid return')
}
else{
    console.log('invalid return')
}