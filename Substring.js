function substring(value) {
  let result = [''];
  let str = value;

  for (let s of str) {
    for (let i in result){
      result.push(result[i]+s);
    }
  }
  return result.sort((a,b) => a.length - b.length);
}

function recurse(value) {
  if (value === '') {
    return '';
  } else {
    return value
  }
}

// function lengthOfLongestSubstring(s) {
//   let substrings = [''];
//     let maxCount = 0;
//     for(let letter of s){
//         for(let i in substrings){
//             const potentialSubstring = substrings[i]+letter;
//             if(isUnique(potentialSubstring)){
//               if(maxCount < potentialSubstring.length){
//                 maxCount = potentialSubstring.length;
//             }
//             substrings.push(potentialSubstring)
//             }
            
//         }
//     }
//     console.log(substrings);
//     return maxCount;
// }

// function isUnique(value){
//   let letters = {};
//   for(let v of value){
//     if(letters[v]){
//       return false;
//     } else {
//       letters[v] = 1;
//     }
//   }
//   return true;
// }

function lengthOfLongestSubstring(s){
  let n = s.length 
  let ans = 0;
  let map = new Map() // current index of character
  // try to extend the range [i, j]
  for (let j = 0, i = 0; j < n; j++) {
    console.log('char', s.charAt(j));
      if (map.has(s.charAt(j))) {
          i = Math.max(map.get(s.charAt(j)), i);
          
      }
     
      ans = Math.max(ans, j - i + 1);
      map.set(s.charAt(j), j + 1);
  }
  return ans;
}

console.log(lengthOfLongestSubstring('pwwkew'));