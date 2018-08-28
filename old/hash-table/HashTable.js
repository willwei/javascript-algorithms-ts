"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../linked-list/LinkedList");
const defaultHashTableSize = 32;
class HashTable {
    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList_1.default());
        this.keys = {};
    }
    hash(key) {
        const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)), 0);
        return hash % this.buckets.length;
    }
    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const buketLinkedList = this.buckets[keyHash];
        const node = buketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
        if (!node) {
            buketLinkedList.append(value);
        }
        else {
            node.value = value;
        }
    }
    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
        return node ? node.value : undefined;
    }
}
exports.default = HashTable;
