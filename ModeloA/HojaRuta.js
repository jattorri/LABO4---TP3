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
