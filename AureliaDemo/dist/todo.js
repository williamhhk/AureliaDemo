System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(description) {
                    this.description = description;
                    this.done = false;
                }
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
