const isNarcissistic = (num) => {
  let sum = 0;
  num
    .toString()
    .split("")
    .forEach(
      (digit) =>
        (sum += Math.pow(Number.parseInt(digit), num.toString().length))
    );
  return sum == num;
};
