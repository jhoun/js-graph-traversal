'use strict';

const Node = require('./graphGenerator');

const DFS = (start, searchFor) => {



  let stack = [];
  let visited = [];
  let currentNode = start;

  stack.push(start);


  while (stack.length !==0){
    currentNode = stack.pop();
    if(currentNode.value === searchFor){
      return currentNode;
    }
    if (visited.indexOf(currentNode) !== 1) {
      visited.push(currentNode.name);
      currentNode.neighbors.forEach(function(element){
        stack.push(element);
      })
    }
  }
    return false;

}

module.exports = DFS;
