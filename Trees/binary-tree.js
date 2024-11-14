class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    function findMinDepth(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      if (!node.left) return findMinDepth(node.right) + 1;
      if (!node.right) return findMinDepth(node.left) + 1;
      return Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1;
    }
    return findMinDepth(this.root);
  }

  maxDepth() {
    function findMaxDepth(node) {
      if (!node) return 0;
      return Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1;
    }
    return findMaxDepth(this.root);
  }

  maxSum() {
    let max = 0;

    function findMaxPathSum(node) {
      if (!node) return 0;
      const leftSum = Math.max(0, findMaxPathSum(node.left));
      const rightSum = Math.max(0, findMaxPathSum(node.right));
      max = Math.max(max, leftSum + node.val + rightSum);
      return node.val + Math.max(leftSum, rightSum);
    }

    findMaxPathSum(this.root);
    return max;
  }

  nextLarger(lowerBound) {
    let closest = null;

    function findNextLarger(node) {
      if (!node) return;
      if (node.val > lowerBound && (closest === null || node.val < closest)) {
        closest = node.val;
      }
      findNextLarger(node.left);
      findNextLarger(node.right);
    }

    findNextLarger(this.root);
    return closest;
  }

  areCousins(node1, node2) {
    function getDepthAndParent(node, target, depth = 0, parent = null) {
      if (!node) return null;
      if (node === target) return { depth, parent };
      return getDepthAndParent(node.left, target, depth + 1, node) ||
             getDepthAndParent(node.right, target, depth + 1, node);
    }

    const info1 = getDepthAndParent(this.root, node1);
    const info2 = getDepthAndParent(this.root, node2);
    
    return info1 && info2 && info1.depth === info2.depth && info1.parent !== info2.parent;
  }

  static serialize(tree) {
    const values = [];

    function traverse(node) {
      if (!node) {
        values.push(null);
        return;
      }
      values.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(tree.root);
    return JSON.stringify(values);
  }

  static deserialize(stringTree) {
    const values = JSON.parse(stringTree);
    if (!values.length) return new BinaryTree();

    function buildTree() {
      const val = values.shift();
      if (val === null) return null;
      const node = new BinaryTreeNode(val);
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }

    return new BinaryTree(buildTree());
  }

  lowestCommonAncestor(node1, node2) {
    function findLCA(node) {
      if (!node || node === node1 || node === node2) return node;
      const left = findLCA(node.left);
      const right = findLCA(node.right);
      if (left && right) return node;
      return left || right;
    }

    return findLCA(this.root);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

