// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, root=this.root) {
      //base case
      if (!root){this.root = new TreeNode(val);return}
      //left branch treversal
      if (val < root.val) {if (!root.left){root.left = new TreeNode(val)}else {this.insert(val, root.left)}}
      //right branch treversal
      else if (val > root.val){if (!root.right){root.right = new TreeNode(val)}else {this.insert(val, root.right)}}
      // returns if val = root.val
      else {return}


  }

  search(val,root = this.root) {
    if (!root) {return false}
    else if (val < root.val) {return this.search(val, root.left)}
    else if (val > root.val){return this.search(val, root.right)}
    else {return true}


  }


  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [];
    queue.push(this.root);
    while (queue.length){
      let node = queue.shift();
      console.log(node.val);
      if (node.left){queue.push(node.left);}
      if (node.right){queue.push(node.right)};
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [];
    stack.push(this.root);
    while (stack.length){
      let node = stack.pop();
      console.log(node.val);
      if (node.left){stack.push(node.left);}
      if (node.right){stack.push(node.right);}
    }
    // Fill this in

  }

  preOrderTraversal(root=this.root) {

    if (root){
      console.log(root.val);
      this.preOrderTraversal(root.left);
      this.preOrderTraversal(root.right);
    }

  }


  inOrderTraversal(root=this.root) {

    if (root){
      this.inOrderTraversal(root.left);
      console.log(root.val);
      this.inOrderTraversal(root.right);

    }
  }

  postOrderTraversal(root=this.root) {
    if (root){
      this.postOrderTraversal(root.left);
      this.postOrderTraversal(root.right);
      console.log(root.val)

  }


}
}
module.exports = [BinarySearchTree, TreeNode];
