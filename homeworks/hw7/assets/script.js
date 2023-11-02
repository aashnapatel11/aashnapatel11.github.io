function averageThreeNumbers(x,y,z) {
  let avg = (z+y+x) / 3;
  return avg; 
}
let noun = "bear";
function createSentence(avg, noun){
  let sentence = "On average, a Berkeley student has" + " " + avg + " " + noun + "s.";
  console.log(sentence);
  return sentence;
  
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x,y,z);
let sentence = createSentence(avg, "bear");

