
const Node = class {
  constructor(name, value) {
    this.name = name,
    this.value = value,
    this.neighbors = []
  }

  addNeighbors(arr) {
    let neighbors = this.neighbors.concat(arr);
    this.neighbors = neighbors;
    console.log('neighbors: ', neighbors);
    return neighbors;
  }

module.exports = class Node {
  constructor() {}

}
