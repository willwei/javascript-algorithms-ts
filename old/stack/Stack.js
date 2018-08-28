"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../utils/index");
class Stack {
    constructor(data) {
        this.top = new index_1.default(data);
    }
    isEmpty() {
        return this.top == null;
    }
    peek() {
        return this.top;
    }
    push(data) {
        let node = new index_1.default(data);
        node.next = this.top;
        this.top = node;
    }
    pop() {
        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}
