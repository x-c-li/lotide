const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 !== 0) {
    let oddMiddle = [];
    oddMiddle.push(array[Math.floor(array.length / 2)]);
    return oddMiddle;
  } else {
    let evenMiddle = [];
    evenMiddle.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
    return evenMiddle;
  }
}

module.exports = middle;

