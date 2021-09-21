const likes = (who) => {
  if (who.length < 1) return "no one likes this";
  if (who.length == 1) return `${who[0]} likes this`;
  if (who.length == 2) return `${who[0]} and ${who[1]} like this`;
  if (who.length == 3) return `${who[0]}, ${who[1]} and ${who[2]} like this`;
  if (who.length > 3)
    return `${who[0]}, ${who[1]} and ${who.length - 2} others like this`;
};
