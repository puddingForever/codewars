// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// my solution
function areYouPlayingBanjo(name) {
  const arr = name.split("");
  const newArr = arr.map((e) => e.toLowerCase());
  return newArr[0] === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

// best practice
function areYouPlayingBanjo(name) {
  return (
    name + (name[0].toLowerCase() == "r" ? "plays" : "does not play") + "banjo"
  );
}
