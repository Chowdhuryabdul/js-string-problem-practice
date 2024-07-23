const lyrics = 'tumi bondhu kala pakdhi ame jeno ki. boshontto kale tumai bolte parini'
// how to breaks this string 

const parts = lyrics.split(' ')
const sentence = lyrics.split('.')
// console.log(parts)
// console.log(sentence)

// howt to separate all the caracters-- 

const chart = lyrics.split('');
// console.log(chart);

// how to slice 

const partial = lyrics.slice(5, 8);
console.log(partial);

const partila2 = lyrics.substring(5, 8)
console.log(partila2)


// to find index of the sentence 

const index = 15;
console.log(lyrics.at(index))

// if want to find the from the reverse 

const indexReverse = -5;
console.log(lyrics.at(indexReverse))

// to remove the white space in the first and the last in sentence - use trim 


const loveWord = ' love you '
console.log(loveWord.trim());

// how to make connection with two parts, two lines or jora dewa 
const love1 = 'hei du';
const love2 = 'elsker deg';

console.log(love1.concat(' ', love2))


const lines = [
    'tumi bondhu kala pakdhi ame jeno ki',
  'boshontto kale tumai bolte parini'
];

const newSong = lines.join('; ')
console.log(newSong)
