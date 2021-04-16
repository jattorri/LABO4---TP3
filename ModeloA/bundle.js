(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.Detalle = void 0;
var HojaRuta_1 = require("./HojaRuta");
var Detalle = /** @class */ (function () {
    function Detalle() {
        this.kmSalida = 0;
        this.kmRegreso = 0;
        this.horaSalida = 0;
        this.horaRegreso = 0;
        this.minutoSalida = 0;
        this.minutoRegreso = 0;
        this.hojaRuta = new HojaRuta_1.HojaRuta();
    }
    return Detalle;
}());
exports.Detalle = Detalle;

},{"./HojaRuta":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta() {
        this.fecha = new Date;
        this.numero = 0;
        this.detalle = [];
    }
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var sumatoriaKms = 0;
        for (var i in this.detalle) {
            sumatoriaKms += (this.detalle[i].kmRegreso - this.detalle[i].kmSalida);
        }
        return sumatoriaKms;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.patente = "";
        this.marca = "";
        this.modelo = "";
        this.hojaRuta = [];
    }
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var sumatoriaKms = 0;
        for (var i in this.hojaRuta) {
            if (this.hojaRuta[i].fecha.getTime() >= fechaDesde.getTime() && this.hojaRuta[i].fecha.getTime() <= fechaHasta.getTime()) {
                sumatoriaKms += sumatoriaKms + this.hojaRuta[i].calcularTotalKilometros();
                return sumatoriaKms;
            }
        }
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;

},{}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.TestA = void 0;
var Vehiculo_1 = require("./Vehiculo");
var HojaRuta_1 = require("./HojaRuta");
var Detalle_1 = require("./Detalle");
var TestA = /** @class */ (function () {
    function TestA() {
        this.vehiculo = new Vehiculo_1.Vehiculo();
        this.hojaRuta1 = new HojaRuta_1.HojaRuta();
        this.hojaRuta2 = new HojaRuta_1.HojaRuta();
        this.hojaRuta3 = new HojaRuta_1.HojaRuta();
    }
    TestA.prototype.asignarValores = function () {
        var detalle1 = new Detalle_1.Detalle();
        detalle1.kmSalida = 1000;
        detalle1.kmRegreso = 1050;
        detalle1.horaSalida = 15;
        detalle1.horaRegreso = 20;
        detalle1.minutoSalida = 30;
        detalle1.minutoRegreso = 15;
        var detalle2 = new Detalle_1.Detalle();
        detalle2.kmSalida = 1050;
        detalle2.kmRegreso = 1100;
        detalle2.horaSalida = 10;
        detalle2.horaRegreso = 13;
        detalle2.minutoSalida = 45;
        detalle2.minutoRegreso = 30;
        var detalle3 = new Detalle_1.Detalle();
        detalle3.kmSalida = 1100;
        detalle3.kmRegreso = 1150;
        detalle3.horaSalida = 8;
        detalle3.horaRegreso = 12;
        detalle3.minutoSalida = 15;
        detalle3.minutoRegreso = 10;
        var detalle4 = new Detalle_1.Detalle();
        detalle4.kmSalida = 1150;
        detalle4.kmRegreso = 1200;
        detalle4.horaSalida = 9;
        detalle4.horaRegreso = 14;
        detalle4.minutoSalida = 10;
        detalle4.minutoRegreso = 30;
        var detalle5 = new Detalle_1.Detalle();
        detalle5.kmSalida = 1200;
        detalle5.kmRegreso = 1250;
        detalle5.horaSalida = 11;
        detalle5.horaRegreso = 15;
        detalle5.minutoSalida = 25;
        detalle5.minutoRegreso = 15;
        var detalle6 = new Detalle_1.Detalle();
        detalle6.kmSalida = 1250;
        detalle6.kmRegreso = 1300;
        detalle6.horaSalida = 12;
        detalle6.horaRegreso = 15;
        detalle6.minutoSalida = 30;
        detalle6.minutoRegreso = 10;
        var detalle7 = new Detalle_1.Detalle();
        detalle7.kmSalida = 1300;
        detalle7.kmRegreso = 1350;
        detalle7.horaSalida = 10;
        detalle7.horaRegreso = 16;
        detalle7.minutoSalida = 20;
        detalle7.minutoRegreso = 15;
        var detalle8 = new Detalle_1.Detalle();
        detalle8.kmSalida = 1350;
        detalle8.kmRegreso = 1400;
        detalle8.horaSalida = 8;
        detalle8.horaRegreso = 11;
        detalle8.minutoSalida = 10;
        detalle8.minutoRegreso = 45;
        var detalle9 = new Detalle_1.Detalle();
        detalle9.kmSalida = 1400;
        detalle9.kmRegreso = 1450;
        detalle9.horaSalida = 7;
        detalle9.horaRegreso = 12;
        detalle9.minutoSalida = 45;
        detalle9.minutoRegreso = 30;
        this.hojaRuta1.fecha = new Date("2021-01-20");
        this.hojaRuta1.numero = 125;
        this.hojaRuta2.fecha = new Date("2021-03-11");
        this.hojaRuta2.numero = 228;
        this.hojaRuta3.fecha = new Date("2021-04-15");
        this.hojaRuta3.numero = 369;
        this.vehiculo.patente = "MHO-789";
        this.vehiculo.marca = "Ford";
        this.vehiculo.modelo = "Ka";
        this.hojaRuta1.detalle.push(detalle1);
        this.hojaRuta1.detalle.push(detalle2);
        this.hojaRuta1.detalle.push(detalle3);
        this.hojaRuta2.detalle.push(detalle4);
        this.hojaRuta2.detalle.push(detalle5);
        this.hojaRuta2.detalle.push(detalle6);
        this.hojaRuta3.detalle.push(detalle7);
        this.hojaRuta3.detalle.push(detalle8);
        this.hojaRuta3.detalle.push(detalle9);
        this.vehiculo.hojaRuta.push(this.hojaRuta1);
        this.vehiculo.hojaRuta.push(this.hojaRuta2);
        this.vehiculo.hojaRuta.push(this.hojaRuta3);
    };
    TestA.prototype.calcularKm = function () {
        var totalKilometros = this.hojaRuta1.calcularTotalKilometros();
        return totalKilometros;
    };
    return TestA;
}());
exports.TestA = TestA;
var test = new TestA();
test.asignarValores();
console.log(test.calcularKm());
document.body.innerHTML = String(test.calcularKm()); 

},{"./Detalle":1,"./HojaRuta":2,"./Vehiculo":3}]},{},[4]);
