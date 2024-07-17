// const massMark = 78;
// const heightMark = 1.69;
// const massJonas = 92;
// const heightJonas = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJonas = 85;
const heightJonas = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJonas = massJonas / (heightJonas * heightJonas);
const markHeightBMI = BMIMark > BMIJonas
console.log(BMIMark, BMIJonas, markHeightBMI)
