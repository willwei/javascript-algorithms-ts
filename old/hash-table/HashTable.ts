import LinkedList from '../linked-list/LinkedList'

const defaultHashTableSize: number = 32;

interface LinkedListObject {
  [key: string]: number
}

export default class HashTable {
  buckets: Array<LinkedList>;
  keys: LinkedListObject;
  constructor(hashTableSize: number = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {};
  }
  hash(key: string) {
    const hash = Array.from(key).reduce(
      (hashAccumulator: number, keySymbol: string) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0
    )
    return hash % this.buckets.length;
  }
  set(key: string, value: number) {
    const keyHash: number= this.hash(key);
    this.keys[key] = keyHash;
    const buketLinkedList: LinkedList = this.buckets[keyHash];
    const node = buketLinkedList.find({ callback: nodeValue => nodeValue.key === key});

    if (!node) {
      buketLinkedList.append(value);
    } else {
      node.value = value;
    }
  }
  get(key: string) {
    const bucketLinkedList: LinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    return node ? node.value : undefined;
  }
}