/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

var twoSum = function(nums, target) {
  let check = new Map();
  
  for(let i =0; i < nums.length; i++){
      if(check.has(target - nums[i])){
          return [check.get(target - nums[i]), i];
      } else {
          check.set(nums[i], i);
      }
  }
};