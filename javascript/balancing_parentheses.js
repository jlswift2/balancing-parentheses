function balancingParentheses(string) {
  // let arr = string.split('')
  // let openPar = arr.filter( el => el === '(' ? el : null)
  // let closePar = arr.filter( el => el === ')' ? el : null)

  // let result = openPar.length - closePar.length
  // return(Math.abs(result))

  let arr = string.split('')
  let openings = 0
  let closures = 0

  for(const ele of arr) {
    if(ele === '(') {
      openings++
    } else if (ele === ')' && openings > 0) {
      openings--
    } else {
      closures++
    }
  }

  return(openings + closures)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// my thought is to first split the string.
// Then, I'd count the number of each type or parentheses - I can use filter here
// I would then subtract them and return the absolute value of the difference, which should be the number of extras we have

// string.split
// a = filter array for (
// b = filter array for )
// return Math.abs(a-b)

// So this answer works on the fundamental level that I am just counting values. It does not account for if a string starts or ends with an inappropriate parenthesis.

//Option 2 
// We can for loop through the string and keep a flexible count 
// If there is an opening, we increment the opening variable. If it is closed later, we can decriment it.
// In order to account for the possibility for a closing parenth, we also need another variable that will essentially only be incremented if there was not already an opening.

// split string
// let openings  = 0
// let closures = 0

// for(ele of arr){
//   if ele === '(') {
//     increment openings
//   } else if (ele === ')' && openings > 0) {
//     decrement openings
//   } else {
//     increment closures
//   }
// }




