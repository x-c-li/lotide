//TAIL FUNCTION

const tail = function(list) {
  let newArray = [];
  for (let i = 1; i < list.length; i++) {
    newArray.push(list[i]);
  }
  return newArray;
};

module.exports = tail;

