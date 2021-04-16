"use strict";
exports.__esModule = true;
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura() {
        this.letra = "";
        this.numero = 0;
        this.recargo = 0;
        this.tipoPago = "";
        this.totalItem = 0;
        this.fecha = new Date();
    }
    return Factura;
}());
exports.Factura = Factura;
