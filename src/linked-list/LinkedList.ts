import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value: any) {
    const newNode = new LinkedListNode(value, this.head);
  }

  append() {

  }

  delete() {

  }

  find() {

  }

  deleteTail() {

  }

  deleteHead() {

  }

  toArray() {

  }

  toString() {

  }
}