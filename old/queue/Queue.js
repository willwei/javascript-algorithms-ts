"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../utils/index");
class Queue {
    constructor(data) {
        this.head = new index_1.default(data);
        this.tail = this.head;
    }
    isEmpty() {
        return this.head == null;
    }
    peek() {
        return this.head.data;
    }
    add(data) {
        const node = new index_1.default(data);
        if (this.tail != null) {
            this.tail.next = node;
        }
        this.tail = node;
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
