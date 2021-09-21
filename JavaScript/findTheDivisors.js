const divisors = (num) => {
  let divisors = [];
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) divisors.push(i);
  }
  if (divisors.length < 1) return `${num} is prime`;
  return divisors;
};
