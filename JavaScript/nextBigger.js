// /** nextBigger - Finds and returns the next larger number that is made up
//  *                  of the same digits in.
//  *
//  * @param n the number to find the next bigger number with the same digits
//  * @returns the next bigger number with the same digits, or -1 if none exist
//  */
// function nextBigger(n) {
//   const numStr = n.toString();
//   if (numStr.length < 2) return -1;
//   let result = [];
//   //start looping from the right-most digit looking for the first
//   //occurrence of a digit smaller immediately to the left
//   for (let i = numStr.length - 1; i > 0; i--) {
//     if (Number.parseInt(numStr[i - 1]) < Number.parseInt(numStr[i])) {
//       result.push(numStr.substring(0, i - 1));
//       result.push(rearrange(numStr.substring(i - 1)));
//       break;
//     }
//   }
//   if (result.length === 0) return -1;
//   return Number.parseInt(result.join(""));
// }

// /** rearrange - Rearranges a number to the next largest number with the same digits by
//  *              taking the digit at index 0 and finding the next larger digit, swapping
//  *              that with index 0, then orders all digits after index 0 in ascending order
//  *
//  *
//  * @param numAsString the number to rearrange as a string
//  * @returns the rearranged number
//  */
// function rearrange(numAsString) {
//   let remaining = numAsString.substring(1).split("");
//   let preSorted = strSwap(
//     numAsString,
//     0,
//     numAsString.indexOf(
//       remaining.sort((a, b) => a - b).find((x) => x > numAsString[0])
//     )
//   );
//   return (
//     preSorted[0] +
//     preSorted
//       .substring(1)
//       .split("")
//       .sort((a, b) => a - b)
//       .join("")
//   );
// }

// /** strSwap - Swaps two characters in a string based on
//  *            the zero-based index positions of the characters
//  *
//  * @param str - the string
//  * @param a - the first index position to swap
//  * @param b - the second index position to swap
//  * @returns the swapped string
//  */
// function strSwap(str, a, b) {
//   if (a === b) return str;
//   if (a > b) {
//     let temp = a;
//     a = b;
//     b = temp;
//   }
//   return (
//     str.substring(0, a) +
//     str[b] +
//     str.substring(a + 1, b) +
//     str[a] +
//     str.substring(b + 1)
//   );
// }

//Olegeant's solution
// function nextBigger(n) {
//   n = [...(n + "")].reverse(); // forming reversed array of strings to apply effective array prototype methods;

//   const maxShufflePos = n.findIndex((x, i, a) => x < a[i - 1]); // finding index of the 1st digit that is lesser than all previously parsed (parsing actually corresponds now to reverse direction from number end to the left);
//   if (maxShufflePos === -1) return -1; // if condition is true - this means given number is already maximal possible to be constructed from its digits;
//   const smallestOfHigherPos = n.findIndex((x, _, a) => x > a[maxShufflePos]); // finding the minimal digit before (actually - after) previously determined digit that is bigger - this one should take its place;

//   n[maxShufflePos] = n.splice(smallestOfHigherPos, 1, n[maxShufflePos])[0]; // starting to shuffle digits, now swapping 2 digits previously found;
//   n.splice(
//     0,
//     maxShufflePos,
//     ...n.slice(0, maxShufflePos).sort((a, b) => b - a)
//   ); // sorting the number "tail" to get the lowest possible number of bigger and replacing appropriate digits in array;

//   return n.reverse().join("") * 1; // reverse array back and make it to be a number;
// }

function nextBigger(n) {
  if (n === reverseSortDigits(n)) return -1;

  let nSorted = sortDigits(n);

  while (true) {
    n += 1;
    if (sortDigits(n) === nSorted) return n;
  }
}

function splitDigits(d) {
  return String(d).split("");
}

function sortDigits(d) {
  return Number(splitDigits(d).sort().join(""));
}

function reverseSortDigits(d) {
  return Number(splitDigits(d).sort().reverse().join(""));
}
console.log(nextBigger(299988766543210));
