function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((l) => string.toLowerCase().includes(l));
}
