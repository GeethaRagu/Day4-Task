//Task 1
//1.Print odd numbers in an array [1,15,48,59,7,83]
//Anonymous function
console.log("1.Print odd numbers in an array");
let resultarray = [];
var odd = function (input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) resultarray.push(input[i]);
  }
  return resultarray;
};
console.log("Anonymous function:- " + odd([1, 15, 48, 59, 7, 83]));

//IIFE function
let resultarray1 = [];
(function (input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) resultarray1.push(input[i]);
  }
  console.log("IIFE function:- " + resultarray1);
})([1, 15, 48, 59, 7, 83]);

//Arrow function
let resultarray2 = [];
var odd1 = (input) => {
  for (var i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) resultarray2.push(input[i]);
  }
  return resultarray2;
};
console.log("Arrow function:- " + odd1([1, 15, 48, 59, 7, 83]));

//2.Convert all the strings to title caps in a string array
//Anonymous function
console.log("2.Convert all the strings to title caps in a string array");
var titlecase = function(str) {
    
    str = str.join(" ").toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  console.log("Anonymous function:- "+titlecase(["welcome","to" ,"our","home"]));

//IIFE function

(function (str) {
    str = str.join(" ").toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  console.log("IIFE function:- " + str.join(" "));
})(["welcome","to" ,"our","home"]);

//Arrow function

var titlecase1 = (str) => {
    str = str.join(" ").toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
};
console.log("Arrow function:-" + titlecase1(["welcome","to" ,"our","home"]));

//3.Sum of all numbers in an array
//Anonymous function
console.log("3.Sum of all numbers in an array");
var total = 0;
var sum = function (input) {
  for (var i = 0; i < input.length; i++) {
    total += input[i];
  }
  return total;
};
console.log("Anonymous function:- " + sum([1, 15, 48]));

//IIFE function
let total1 = 0;
(function (input) {
  for (var i = 0; i < input.length; i++) {
    total1 += input[i];
  }
  console.log("IIFE function:- " + total1);
})([1, 15, 48]);

//Arrow function
let total2 = 0;
var sum1 = (input) => {
  for (var i = 0; i < input.length; i++) {
    total2 += input[i];
  }
  return total2;
};
console.log("Arrow function:-" + sum1([1, 15, 48]));

//4.Return all the prime numbers in an array
//Anonymous function
console.log("4.Prime numbers in an array");
var findPrimeNumbers = function (array) {
  const primes = [];
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
};

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i = i + 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Anonymous function:- " + findPrimeNumbers([1, 15, 48, 7, 11]));

//IIFE function

(function (array) {
  const primes = [];
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  console.log("IIFE function:- " + primes);
})([1, 15, 48, 7, 11]);

//Arrow function

var prime1 = (array) => {
  const primes = [];
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (isPrime(number)) {
      primes.push(number);
    }
  }
  return primes;
};
console.log("Arrow function:-" + prime1([1, 15, 48, 7, 11]));

//5.Return all the palindromes in an array
//Anonymous function
console.log("5.Palindromes in an array");
var getPalindromes = function (array) {
  let palindromes = [];
  for (let i = 0; i < array.length; i++) {
    const str = array[i].toString();
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
      palindromes.push(str);
    }
  }
  return palindromes;
};

console.log(
  "Anonymous function:- " +
    getPalindromes(["mom", "madam", "level", "noon", "geetha"])
);

//IIFE function

(function (array) {
  let palindromes = [];
  for (let i = 0; i < array.length; i++) {
    const str = array[i].toString();
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
      palindromes.push(str);
    }
  }
  console.log("IIFE function:- " + palindromes);
})(["mom", "madam", "level", "noon", "geetha"]);

//Arrow function

var getPalindromes1 = (array) => {
  let palindromes = [];
  for (let i = 0; i < array.length; i++) {
    const str = array[i].toString();
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
      palindromes.push(str);
    }
  }
  return palindromes;
};
console.log(
  "Arrow function:-" +
    getPalindromes1(["mom", "madam", "level", "noon", "geetha"])
);

//6. Return median of two sorted arrays of the same size using arrow function
var findMedian = (arr1, arr2) => {
  var x = arr1.length;
  var median;
  if (x % 2 === 0) {
    var x1 = (arr1[x / 2] + arr1[x / 2 - 1]) / 2;
    var x2 = (arr2[x / 2] + arr2[x / 2 - 1]) / 2;
    median = (x1 + x2) / 2;
  } else {
    var g = arr1[Math.ceil(x / 2 - 1)];
    var h = arr2[Math.ceil(x / 2 - 1)];
    median = (g + h) / 2;
  }

  return median;
};
console.log(
  "6.Median of two sorted arrays of the same size using arrow function:- " +
    findMedian([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])
);

// 7.Remove duplicates from an array using arrow function
var duplicates = (array) => {
  let resultarray = [];
  for (var i = 0; i < array.length; i++) {
    if (resultarray.indexOf(array[i]) === -1) {
      resultarray.push(array[i]);
    }
  }
  return resultarray;
};
console.log(
  "7.Remove duplicates from an array using arrow function:- " +
    duplicates([1, 5, 7, 3, 4, 7, 3])
);

//8.Rotate an array by k times using arrow function
var rotate = (arr, numberOfShifts) => {
  let tmp = 0;
  while (tmp < numberOfShifts) {
    arr.push(arr.shift());
    tmp++;
  }
  return arr;
};
console.log("8.Rotate an array by k times using arrow function;- "+rotate([2, 4, 6, 8, 10], 5));
