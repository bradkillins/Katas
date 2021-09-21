const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i == 0) return false;
    if (i == 2) i--;
  }
  return true;
};
