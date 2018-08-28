import Node from '../utils/index';

class Queue {
  head: Node; // remove from the head
  tail: Node; // add things here
  constructor(data: number) {
    this.head = new Node(data);
    this.tail = this.head;
  }
  isEmpty() {
    return this.head == null;
  }
  peek() {
    return this.head.data;
  }
  add(data: number) {
    const node = new Node(data);
    if (this.tail != null) {
      this.tail.next = node;
    }
    this.tail = node; // update tail
    if (this.head == null) {
      this.head = node;
    }
  }
  remove() {
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head == null) {
      this.tail = null;
    }
    return data;
  }
}