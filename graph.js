const {SinglyLinkedList} = require("./sll");

class Graph {
  constructor(vertices = []) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Defining an array which can hold LinkedLists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new LinkedList for each vertex/index of the list
    for (let i = 0; i < vertices; i++) {
      let temp = new SinglyLinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices)
      this.list[source].insertAtHead(destination);
    //ненаправленный this.list[destination].insertAtHead(source)
  }

  printGraph() {
    let log = '';
    for (let i = 0; i < this.list.length; i++) {
      log += "{" + String(i) + "} => ";
      let temp = this.list[i].getHead();
      while (temp != null) {
        log += "[" + String(temp.data) + "] > ";
        temp = temp.next;
      }
      log+='null\n'

    }
    console.log(log);
  }
}

const g = new Graph(3);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.printGraph();