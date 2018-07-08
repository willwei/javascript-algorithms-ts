import Node from '../utils/index';

class Stack {
  top: Node;
  constructor(data: number) {
    this.top = new Node(data);
  }
  isEmpty() {
    return this.top == null;
  }
  peek() {
    return this.top;
  }
  push(data: number) {
    let node: Node = new Node(data);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }
}