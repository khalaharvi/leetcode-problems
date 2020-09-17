// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  const lettersCount = {};
  let minIndex = s.length;
  for(let i =0; i < s.length; i++){
      if(lettersCount[s[i]]){
          lettersCount[s[i]]++;
      } else {
          lettersCount[s[i]] = 1;
      }
  }
  
  for(let[key,value] of Object.entries(lettersCount)){
      if (value <= 1){
        console.log(`key ${key} value: ${value}`)
        console.log('index', s.indexOf(key));
          minIndex = (minIndex > s.indexOf(key)) ? s.indexOf(key) : minIndex;
      } 
  }
  if(minIndex === s.length && lettersCount[s[minIndex -1]] > 1) {
    minIndex = -1;
  }
  return minIndex;
  
};

console.log(firstUniqChar("cc"));
