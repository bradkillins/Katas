//https://www.codewars.com/kata/550f22f4d758534c1100025a

const directionsReduce = (directions) => {
  let stack = [];
  directions.forEach((el) => {
    if (!stack.length) stack.push(el);
    else {
      let popped = stack.pop();
      if (
        (popped.toLowerCase() == "east" && el.toLowerCase() == "west") ||
        (popped.toLowerCase() == "west" && el.toLowerCase() == "east") ||
        (popped.toLowerCase() == "north" && el.toLowerCase() == "south") ||
        (popped.toLowerCase() == "south" && el.toLowerCase() == "north")
      )
        null;
      else {
        stack.push(popped);
        stack.push(el);
      }
    }
  });
  return stack;
};
