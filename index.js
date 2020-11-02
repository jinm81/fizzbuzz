// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const str = " hello";
// let newStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str[i];
// }
// console.log(newStr);

// const msg = "Hello im learning to be a web developer";
// const newstr = msg.split(" ").reverse().join().replace(/,/g, " ");

// console.log(newstr);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const largestNumber = (values) => {
  let highest = 0;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > highest) {
      highest = values[i];
    }
  }
  return highest;
};

console.log(largestNumber(numbers));
