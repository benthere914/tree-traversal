// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(root = null) {
    this.root = root
  }

  insert(val, root = this.root) {
    //base case
    if (!root){this.root = new TreeNode(val);return}
    //left branch treversal
    if (val < root.val) {if (!root.left){root.left = new TreeNode(val)}else {this.insert(val, root.left)}}
    //right branch treversal
    else if (val > root.val){if (!root.right){root.right = new TreeNode(val)}else {this.insert(val, root.right)}}
    // returns if val = root.val
    else {return}
  }

  search(val, root = this.root) {
    if (!root) {return false}
    else if (val < root.val) {return this.search(val, root.left)}
    else if (val > root.val){return this.search(val, root.right)}
    else {return true}
    }


  preOrderTraversal(root = this.root) {
    //slr
    if (root){
      console.log(root.val);
      this.preOrderTraversal(root.left);
      this.preOrderTraversal(root.right);
    }

  }

  inOrderTraversal(root = this.root) {
    //lsr
    if (root){
      this.inOrderTraversal(root.left);
      console.log(root.val);
      this.inOrderTraversal(root.right);
    }
  }

  postOrderTraversal(root = this.root) {
    //lrs
    if (root){
      this.postOrderTraversal(root.left);
      this.postOrderTraversal(root.right);
      console.log(root.val)
    }
  }
}

// let bst = new BinarySearchTree();
// for (let i = 1; i < 1000000; i % 2 ? i *=2: i *= -2){
//   console.log(i)
//   bst.insert(i)
// }

// console.log(bst)
module.exports = BinarySearchTree;
