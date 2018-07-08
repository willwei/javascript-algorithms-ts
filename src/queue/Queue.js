"use strict";
exports.__esModule = true;
var index_1 = require("../utils/index");
var Queue = (function () {
    function Queue(data) {
        this.head = new index_1["default"](data);
        this.tail = this.head;
    }
    Queue.prototype.isEmpty = function () {
        return this.head == null;
    };
    Queue.prototype.peek = function () {
        return this.head.data;
    };
    Queue.prototype.add = function (data) {
        var node = new index_1["default"](data);
        if (this.tail != null) {
            this.tail.next = node;
        }
        this.tail = node;
        if (this.head == null) {
            this.head = node;
        }
    };
    Queue.prototype.remove = function () {
        var data = this.head.data;
        this.head = this.head.next;
        if (this.head == null) {
            this.tail = null;
        }
        return data;
    };
    return Queue;
}());
//# sourceMappingURL=Queue.js.map