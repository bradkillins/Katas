const toWeirdCase = (str) => {
  return str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, index) =>
          index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join("")
    )
    .join(" ");
};

console.log(toWeirdCase("this is hilarious! lol"));
