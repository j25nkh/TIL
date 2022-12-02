function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  const child = new BinarySearchTree(value);

  if (!this.value) {
    this.value = value;

    return;
  }

  if (value < this.value) {
    if (this.left === null) {
      this.left = child;
    }

    this.left.insert(value);
  }

  if (value > this.value) {
    if (this.right === null) {
      this.right = child;
    }

    this.right.insert(value);
  }
};


const bst = new BinarySearchTree();

bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(5);

console.log(bst);
