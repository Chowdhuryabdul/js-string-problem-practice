/* to find something in the string we need to use - includesof */

// Use if include 
const lyrics = 'tumi bondhu kala pakdhi ame jeno ki. boshontto kale tumai bolte parini'

// const findOneThing = lyrics.includes('jeno');
// const findOneThing = lyrics.includes('Jeno');
// console.log(findOneThing)
/* Now it show false as it does not match with main String. so we need to make it lower case. we need to make lower case the both jar sathe tulona korbo and jar e tulo na korbo. here you see-- */
// const serachString = 'jeno'  /* As 'J' is capital it will not find so it will show false */
// const findOneThing = lyrics.includes(serachString) /* - print by the variable */
const lyricsLowercase = lyrics.toLocaleLowerCase() /* here i declare it in the variable */
// const findOneThing = lyricsLowercase.includes(serachString)

const serachString = 'Jeno'  /* As 'J' is capital it will not find so it will show false, so i have make the lyrics in lower case in previous code. now i need to make thi serach string alos in lowercase. */
const serachStringLower = serachString.toLowerCase()
// const findOneThing = lyricsLowercase.includes(serachStringLower)

const findOneThingInOneLine = lyrics.toLowerCase().includes(serachString.toLowerCase())
// console.log(findOneThingInOneLine)

// indexof - it usualy get the first one

console.log(lyrics.indexOf('kala'))
// want to get last one than need to use indexof 
console.log(lyrics.lastIndexOf('ki'))

if(lyrics.indexOf('kala') !== -1){
    console.log('it eixts inside the sentence')
}
else{
    console.log('not exist')
}

// startswith


console.log(lyrics.startsWith('tumi'))

// endswith 

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png'

fileName.endsWith('.pdf')






