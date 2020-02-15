class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = [];
  }
  addEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1].push(vtx2);
    this.adjacencyList[vtx2].push(vtx1);
  }
  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(vtx => {
      vtx !== vtx2;
    })
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(vtx => {
      vtx !== vtx1;
    })
  }
  removeVertex(vtx) {
    while(this.adjacencyList[vtx].length) {
      const poppedVtx = this.adjacencyList[vtx].pop();
      this.removeEdge(vtx, poppedVtx);
    }
    delete this.adjacencyList[vtx];
  }
  dfsRecursive(start) {
    
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "C");
graph.addEdge("A", "F");
graph.addEdge("A", "D");
graph.addEdge("C", "B");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("D", "E");
graph.addEdge("F", "E");

console.log(graph.adjacencyList["A"]);