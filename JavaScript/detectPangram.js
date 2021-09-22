/* Determines if a string input is a Panagram (contains every letter of the alphabet) */

const isPangram = (str) =>
  "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((letter) => str.toLowerCase().includes(letter));

