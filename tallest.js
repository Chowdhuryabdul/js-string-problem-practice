function findTallest(x){
 let tallest = x[0]; 
 for(let i = 0; i < x.length; i++){
    const index = i;
    const element = x[index];
    if(element > tallest){
        tallest = element;
    }
 }
 return tallest
}

const numbersArray = [130, 120, 140, 160, 180];
console.log(findTallest(numbersArray));

let theNumber = y[0];
function smallest(y){
for(let i = 0; i <y.length; i++){
    const index = i;
    const element = y[index];
    if(element > theNumber){
        theNumber = element;
    } 
}
return theNumber
}

const smallNumbers = [145, 130, 20, 15, 30];
console.log(smallest(smallNumbers));
