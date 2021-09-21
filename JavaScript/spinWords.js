const spinWords = (str) => {
  return str
    .split(" ")
    .map((el) => (el.length > 4 ? el.split("").reverse().join("") : el))
    .join(" ");
};

console.log(spinWords("Help me! Hurry"));
