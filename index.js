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

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= max) {
//     max = arr[i];
//    console.log('setting max to ' + max);
//   }
// }
// console.log(max);
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= min) {
//     min = arr[i];
//    console.log('setting min to ' + min);
//   }
// }
// console.log(min);


function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}
reverseString('hello');


// function reverseSentence(sentence) {
//   const words = sentence.split(" ");
//   const reversed = words.reverse();
//   const result = reversed.join(" ");
//   return result;
// }



var reverseWords = function(sentence){

	var words = sentence.split(" ").reverse(); 
	var string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; 
	return string;
	
}
reverseWords('I am learning to be a web developer')

