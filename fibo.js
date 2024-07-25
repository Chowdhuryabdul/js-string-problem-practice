/* fibonacci dhara -- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 */ 
/* i need to work with the 2 numbers every Time. here number three is 1 which is the addition of number first(0), and th enumber second (1). and the fourth number is 2 which is addition of number second (1) and number third (1). this is the way it goes
third number theke suro. third holo tar thik immediate duita number er jogfol, aaivabei porer number gulo jog korte hobe */

/* const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
fibo[3] = fibo[2] + fibo[1];
fibo[4] = fibo[3] + fibo[2];
fibo[5] = fibo[4] + fibo[3];    // this is the way amra fibo r value pete pari 
fibo[50] = fibo[49] + fibo[48];
fibo[n] = fibo[n-1] + fibo[n-2];
fibo[i] = fibo[i-1] + fibo[i-2] */  




const fibo = [0, 1];  /* i have to give two value to calculate the third value */
for(let i = 2; i <= 15; i++){  /* i need to set the value of i is 2, as i have to start from the 2nd index of array  */
    fibo[i] = fibo[i-1] + fibo[i-2];  /* i= 2 and 2-1= 1. next part i= 2 so 2-2= 0 so the first value is 1 + 0= 1 thi is the first value */
}
console.log(fibo);