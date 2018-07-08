import Node from '../utils/index';

class LinkedList {
  head: Node;
  constructor(data: number) {
    this.head = new Node(data);
  }
  append(data: number) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let current: Node = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new Node(data);
  }
  prepend(data: number) {
    let newHead: Node = new Node(data);
    newHead.next = this.head;
  }
  deleteWithValue(data: number) {
    if (this.head == null) return;
    if (this.head.data == data) {
      this.head = this.head.next;
      return;
    }

    let current: Node = this.head;
    while (current.next != null) {
      if (current.next.data == data) {
        current.next = current.next.next;
        return;
      } else {
        current = current.next;
      }
    }
  }
}

let ins = new LinkedList(0);

ins.append(1);
ins.append(2);

ins.deleteWithValue(1);