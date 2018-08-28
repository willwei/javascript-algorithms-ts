"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListNode_1 = require("./LinkedListNode");
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        const newNode = new LinkedListNode_1.default(value, this.head);
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
exports.default = LinkedList;
