class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return undefined; // Ignore duplicates
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
    return undefined; // Value already exists
  }

  /** find(val): search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let current = this.root;
    while (current !== null) {
      if (current.val === val) return current;
      current = val < current.val ? current.left : current.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */
  findRecursively(val, current = this.root) {
    if (current === null) return undefined;
    if (current.val === val) return current;
    return val < current.val
      ? this.findRecursively(val, current.left)
      : this.findRecursively(val, current.right);
  }

  /** dfsPreOrder(): Traverse the tree using pre-order DFS.
   * Return an array of visited nodes. */
  dfsPreOrder() {
    const visited = [];
    function traverse(node) {
      if (node === null) return;
      visited.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the tree using in-order DFS.
   * Return an array of visited nodes. */
  dfsInOrder() {
    const visited = [];
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      visited.push(node.val);
      traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the tree using post-order DFS.
   * Return an array of visited nodes. */
  dfsPostOrder() {
    const visited = [];
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the tree using BFS.
   * Return an array of visited nodes. */
  bfs() {
    const visited = [];
    const queue = [];
    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return visited;
  }

  /** remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */
  remove(val, current = this.root, parent = null) {
    if (current === null) return undefined;

    if (val < current.val) {
      return this.remove(val, current.left, current);
    } else if (val > current.val) {
      return this.remove(val, current.right, current);
    } else {
      if (current.left === null && current.right === null) {
        if (parent === null) this.root = null;
        else if (parent.left === current) parent.left = null;
        else parent.right = null;
      } else if (current.left === null || current.right === null) {
        const child = current.left || current.right;
        if (parent === null) this.root = child;
        else if (parent.left === current) parent.left = child;
        else parent.right = child;
      } else {
        const successor = this.findMin(current.right);
        current.val = successor.val;
        this.remove(successor.val, current.right, current);
      }
      return this;
    }
  }

  /** Helper to find the minimum value in a subtree. */
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  /** isBalanced(): Returns true if the BST is balanced, false otherwise. */
  isBalanced() {
    function height(node) {
      if (node === null) return -1;
      return Math.max(height(node.left), height(node.right)) + 1;
    }

    function checkBalance(node) {
      if (node === null) return true;
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        checkBalance(node.left) &&
        checkBalance(node.right)
      );
    }

    return checkBalance(this.root);
  }

  /** findSecondHighest(): Find the second highest value in the BST. */
  findSecondHighest() {
    if (!this.root || (!this.root.left && !this.root.right)) return undefined;

    let current = this.root;
    let parent = null;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    if (current.left) {
      let second = current.left;
      while (second.right) second = second.right;
      return second.val;
    }

    return parent.val;
  }

  /** dfsInOrderIterative(): Iterative in-order traversal. */
  dfsInOrderIterative() {
    const visited = [];
    const stack = [];
    let current = this.root;

    while (stack.length > 0 || current !== null) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      visited.push(current.val);
      current = current.right;
    }

    return visited;
  }
}

module.exports = BinarySearchTree;

