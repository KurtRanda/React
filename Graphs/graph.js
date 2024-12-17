class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent; // Set of adjacent nodes
  }
}

class Graph {
  constructor() {
    this.nodes = new Set(); // Set of nodes in the graph
  }

  // Adds a single vertex (Node instance) to the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // Adds an array of vertices (Node instances) to the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // Creates an undirected edge between two vertices (Nodes)
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // Removes the edge between two vertices
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // Removes a vertex and all edges connecting it
  removeVertex(vertex) {
    for (let neighbor of vertex.adjacent) {
      neighbor.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  // Depth-First Search (DFS) - returns an array of node values
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function dfs(node) {
      if (!node || visited.has(node)) return;

      visited.add(node);
      result.push(node.value);

      for (let neighbor of node.adjacent) {
        dfs(neighbor);
      }
    }

    dfs(start);
    return result;
  }

  // Breadth-First Search (BFS) - returns an array of node values
  breadthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const queue = [start];

    visited.add(start);

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);

      for (let neighbor of node.adjacent) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = { Graph, Node };
