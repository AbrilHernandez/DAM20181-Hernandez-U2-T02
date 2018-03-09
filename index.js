"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alumno_1 = require("./alumno");
var main = /** @class */ (function () {
    function main() {
        this.objetoPrueba = new alumno_1.student();
    }
    main.prototype.main = function () {
    };
    main.prototype.prueba = function () {
        this.objetoPrueba.addAlumn();
        this.objetoPrueba.printAlumn();
    };
    ;
    return main;
}());
