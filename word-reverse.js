// hwo to do word reverse 

function reverseWords(srt){
    const words = srt.split(' ');
    const result = []; /* it is for the push in all the words in array */
    for(let i = words.length -1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    // console.log(result)
    const reversed = result.join(' ') /* - this part is to make a sentence */
    return reversed
}


const myString = 'i am a good boy'
console.log(reverseWords(myString))