function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
 }
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const root = TreeNode(root);
  let checkArray = [];
  Traverse(root);
  function Traverse(root){
      if(root === null) return;
      
      checkArray.push(root.val);
      Traverse(root.right);
      if(root.right && root.right.left){
          Traverse(root.right.left);    
      }
      if(root.left){
          console.log('left', root.left.val);
      }
      if(root.right){
          console.log('right', root.right.val);
      }
      
  }
  return checkArray;
  
};

rightSideView([1,2]);