function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird));
}

console.log(
  gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
);
