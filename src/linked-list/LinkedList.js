"use strict";
exports.__esModule = true;
var index_1 = require("../utils/index");
var LinkedList = (function () {
    function LinkedList(data) {
        this.head = new index_1["default"](data);
    }
    LinkedList.prototype.append = function (data) {
        if (!this.head) {
            this.head = new index_1["default"](data);
            return;
        }
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = new index_1["default"](data);
    };
    LinkedList.prototype.prepend = function (data) {
        var newHead = new index_1["default"](data);
        newHead.next = this.head;
    };
    LinkedList.prototype.deleteWithValue = function (data) {
        if (this.head == null)
            return;
        if (this.head.data == data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next;
                return;
            }
            else {
                current = current.next;
            }
        }
    };
    return LinkedList;
}());
var ins = new LinkedList(0);
ins.append(1);
ins.append(2);
ins.deleteWithValue(1);
//# sourceMappingURL=LinkedList.js.map