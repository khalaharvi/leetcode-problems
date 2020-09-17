DFTPreOrder(currentNode, list) {
  return traversePreOrder(this.root, []);
}
DFTPostOrder(){
  return traversePostOrder(this.root, []); 
}
DFTInOrder(){
  return traverseInOrder(this.root, []);
} 
}

function traversePreOrder(node, list){
list.push(node.value);
if(node.left) {
  traversePreOrder(node.left, list);
}
if(node.right) {
  traversePreOrder(node.right, list);
}
return list;
}

function traverseInOrder(node, list){
if(node.left) {
  traverseInOrder(node.left, list);
}
list.push(node.value);
if(node.right) {
  traverseInOrder(node.right, list);
}
return list;
}

function traversePostOrder(node, list){
if(node.left) {
  traversePostOrder(node.left, list);
}
if(node.right) {
  traversePostOrder(node.right, list);
}
list.push(node.value);
return list;
}