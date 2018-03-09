"use strict";
//funciones de agregar, borrar, imprimir, modificar
Object.defineProperty(exports, "__esModule", { value: true });
var student = /** @class */ (function () {
    function student() {
        this.alumno = Array();
    }
    student.prototype.student = function (no_control, nombre, apellido, promedio, genero, fecha, activo) {
        var alu = {
            control_num: no_control,
            name: nombre,
            lastname: apellido,
            average: promedio,
            gender: genero,
            birthdate: fecha,
            active: activo,
        };
        return alu;
    };
    //método de agregar
    student.prototype.addAlumn = function () {
        var newStudent;
        newStudent = {
            control_num: "13400430",
            name: "abril",
            lastname: "hernandez",
            average: 85,
            gender: "femenino",
            birthdate: "1995/4/21",
            active: true
        };
        this.alumno.push(newStudent);
        this.printAlumn();
    };
    //método de borrar
    student.prototype.dropAlumn = function (no_control) {
        var _this = this;
        var pos;
        this.alumno.forEach(function (control) {
            if (control.control_num == no_control) {
                pos = _this.alumno.indexOf(control);
                _this.alumno.splice(pos, 1);
            }
        });
        this.printAlumn();
    };
    //método de imprimir
    student.prototype.printAlumn = function () {
        this.alumno.forEach(function (elemento) {
            console.log(elemento);
        });
    };
    //método de modificar
    student.prototype.modifyAlumn = function (no_control, nombre, apellido, promedio, genero, fecha, activo) {
        var _this = this;
        var pos;
        this.alumno.forEach(function (control) {
            if (control.control_num == no_control) {
                pos = _this.alumno.indexOf(control);
                _this.alumno.splice(pos, 1);
            }
        });
        this.printAlumn();
    };
    return student;
}());
exports.student = student;
