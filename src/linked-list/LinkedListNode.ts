export default class LinkedListNode {
  next: LinkedListNode;
  value: number;
  constructor(data: number, next: LinkedListNode) {
    this.value = data;
    this.next = next;
  }

  toString(callback: Function) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}