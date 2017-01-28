module.exports = class Node {
  constructor(name, value) {
    this.name = name,
    this.value = value,
    this.neighbors = []
  }

  addNeighbors(arr) {
    let neighbors = this.neighbors.concat(arr);
    this.neighbors = neighbors;
    return neighbors;
  }

  getNeighbors(){
    return this.neighbors;
  }

}
