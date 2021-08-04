// Practice problems on binary trees

function findMinBST (rootNode) {
  let smallest = rootNode.val;
  let queue = [];
  queue.push(rootNode);
  while (queue.length){
      let node = queue.shift();
      smallest = node.val;
      if (node.left){queue.push(node.left);};
    }
    return smallest;
}

function findMaxBST (rootNode) {
  let largest = rootNode.val;
  let queue = [];
  queue.push(rootNode);
  while (queue.length){
      let node = queue.shift();
      largest = node.val;
      if (node.right){queue.push(node.right);};
    }
    return largest;
}

function findMinBT (rootNode) {
  let smallest = rootNode.val;
  let queue = [];
  queue.push(rootNode);
  while (queue.length){
      let node = queue.shift();
      if (node.val < smallest){smallest = node.val;};
      if (node.left){queue.push(node.left);};
      if (node.right){queue.push(node.right);};
    }
    return smallest;
}

function findMaxBT (rootNode) {
  let largest = rootNode.val;
  let queue = [];
  queue.push(rootNode);
  while (queue.length){
      let node = queue.shift();
      if (node.val > largest){largest = node.val;};
      if (node.right){queue.push(node.right);};
      if (node.left){queue.push(node.left);};
    }
    return largest;

}

function getHeight (rootNode) {

  // Fill this in

}

function countNodes (rootNode) {

  // Fill this in

}

function balancedTree (rootNode) {

  // Fill this in

}

function getParentNode (rootNode, target) {

  // Fill this in

}

function inOrderPredecessor (rootNode, target) {

  // Fill this in

}


function deleteNodeBST (rootNode, target) {

  // Fill this in

}

module.exports = [
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
]
