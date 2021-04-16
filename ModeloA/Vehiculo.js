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
