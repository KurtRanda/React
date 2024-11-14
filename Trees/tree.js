/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (!this.root) return 0;

    function sumNodeValues(node) {
      let sum = node.val;
      for (let child of node.children) {
        sum += sumNodeValues(child);
      }
      return sum;
    }

    return sumNodeValues(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    if (!this.root) return 0;

    function countEvenNodes(node) {
      let count = node.val % 2 === 0 ? 1 : 0;
      for (let child of node.children) {
        count += countEvenNodes(child);
      }
      return count;
    }

    return countEvenNodes(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0;

    function countGreaterNodes(node, lowerBound) {
      let count = node.val > lowerBound ? 1 : 0;
      for (let child of node.children) {
        count += countGreaterNodes(child, lowerBound);
      }
      return count;
    }

    return countGreaterNodes(this.root, lowerBound);
  }
}

module.exports = { Tree, TreeNode };
