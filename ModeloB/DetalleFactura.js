"use strict";
exports.__esModule = true;
exports.DetalleFactura = void 0;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura() {
        this.cantidad = 0;
        this.articulos = [];
    }
    /*
    calcularSubTotal(){
        let subtotal:number;
        this.articulos.forEach(articulo =>{
        if (!this.articulos) this.articulos = [];
        subtotal += articulo.precio
    })
    return subtotal
    }*/
    DetalleFactura.prototype.calcularSubTotal = function () {
        var sumatoriaKms = 0;
        for (var i in this.articulos) {
            if (!this.articulos)
                this.articulos = [];
            sumatoriaKms += this.articulos[i].precio;
        }
        return sumatoriaKms;
    };
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
