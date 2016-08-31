function theBeatlesPlay (arrayMscn, arrayInst) {
  var newArray = []
  var i = 0
  for (i; i < 4; i++) {
    newArray.push(`${arrayMscn[i]}` + " plays " + `${arrayInst[i]}`)
  }
  return newArray
}

function johnLennonFacts (array) {
  var i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    ++i
  }
  return array
};

function iLoveTheBeatles (i) {
  var newArray = [] 
  do {
  newArray.push("I love the Beatles!")
  i = i + 1}
  while (i < 15
  );
  return newArray
};
