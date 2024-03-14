"use strict";
var Templates;
(function (Templates) {
    function createElement(tagName, props, ...subNodes) { return $(`<${tagName}/>`, props).append(subNodes); }
    Templates.createElement = createElement;
})(Templates || (Templates = {}));
const FIELD_SIZE = 400;
const CELL_SIZE = 20;
const CELL_IN_LINE = FIELD_SIZE / CELL_SIZE;
class Life {
    constructor() {
        this.field = [];
    }
    fill() {
        for (let i = 0; i < FIELD_SIZE; i++) {
            const elem = (Templates.createElement("div", { id: i, click: function () {
                    $(this).toggleClass('on');
                } }));
            this.field.push(elem);
            $('body > div').append(elem);
        }
        $('body').append(Templates.createElement("button", { click: () => this.start() }, "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044E"));
    }
    prepare() {
    }
    start() {
    }
}
//# sourceMappingURL=life.js.map