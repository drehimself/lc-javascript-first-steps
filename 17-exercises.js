function convertMinutesIntoSeconds(minutes) {
  return minutes * 60;
}

// console.log(convertMinutesIntoSeconds(2));
// console.log(convertMinutesIntoSeconds(3));

function ensureQuestion(str) {
  const lastChar = str.charAt(str.length - 1);

  // if (lastChar === '?') {
  //   return str;
  // }

  // return `${str}?`;

  return lastChar === '?' ? str : `${str}?`;
}

// console.log(ensureQuestion('Yes'));
// console.log(ensureQuestion('No'));
// console.log(ensureQuestion('Hello?'));

function maxOfNumbers(numbers) {
  let maxNumber = numbers[0];

  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] > maxNumber) {
  //     maxNumber = numbers[i];
  //   }
  // }

  // numbers.forEach(number => {
  //   if (number > maxNumber) {
  //     maxNumber = number;
  //   }
  // })

  // return maxNumber;

  return Math.max(...numbers);
}

// console.log(maxOfNumbers([1,3,2,0])); //3
// console.log(maxOfNumbers([1,2,3,10,100])); //100

// Hello there -> HeLlO ThErE
function sarcasticCase(str) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    // if (i % 2 === 0) {// even number
    //   newString = newString + str[i].toUpperCase();
    // } else {
    //   newString = newString + str[i].toLowerCase();
    // }

    newString = i % 2 === 0 ? newString + str[i].toUpperCase() : newString + str[i].toLowerCase();
  }

  return newString;
}

// console.log(sarcasticCase('Hello there'));
// console.log(sarcasticCase('React is a library'));

function noSpace(str) {
  // let newString = '';

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== ' ') {
  //     newString = newString + str[i];
  //   }
  // }

  // return newString;

  return str.split(' ').join('');
}

// console.log(noSpace('Hello there'));
// console.log(noSpace('I am cool'));

function squareSum(numbers) {
  // let result = 0;

  // numbers.forEach(number => {
  //   result += (number * number);
  // })

  // return result;

  return numbers
    .map(number => number * number)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

// console.log(squareSum([1,2,3])) // 14
// console.log(squareSum([3,5])) // 34

function positiveSum(numbers) {
  // let total = 0;

  // numbers.forEach(number => {
  //   if (number > 0) {
  //     total += number;
  //   }
  // })

  // return total;

  return numbers
    .filter(number => number > 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(positiveSum([1,2,-5,3])) // 6
console.log(positiveSum([3,2,-4,5])) // 10
