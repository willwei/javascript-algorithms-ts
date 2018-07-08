"use strict";
exports.__esModule = true;
var index_1 = require("../utils/index");
var Stack = (function () {
    function Stack(data) {
        this.top = new index_1["default"](data);
    }
    Stack.prototype.isEmpty = function () {
        return this.top == null;
    };
    Stack.prototype.peek = function () {
        return this.top;
    };
    Stack.prototype.push = function (data) {
        var node = new index_1["default"](data);
        node.next = this.top;
        this.top = node;
    };
    Stack.prototype.pop = function () {
        var data = this.top.data;
        this.top = this.top.next;
        return data;
    };
    return Stack;
}());
//# sourceMappingURL=Stack.js.map