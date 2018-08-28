"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedListNode {
    constructor(data, next) {
        this.value = data;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
exports.default = LinkedListNode;
