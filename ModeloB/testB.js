"use strict";
exports.__esModule = true;
exports.testB = void 0;

var testB = /** @class */ (function () {
    function testB() {
        this.factura = new Factura();
        this.detalle = new DetalleFactura();
    }
    testB.prototype.iniciarValores = function () {
        var articulo1 = new Articulo();
        articulo1.codigo = 1;
        articulo1.denominacion = 'artLimpieza';
        articulo1.precio = 120;
        articulo1.unidadMedida = "Litro";
        var articulo2 = new Articulo();
        articulo2.codigo = 2;
        articulo2.denominacion = 'artFerreteria';
        articulo2.precio = 230;
        articulo2.unidadMedida = "Unidad";
        var articulo3 = new Articulo();
        articulo3.codigo = 3;
        articulo3.denominacion = 'Alimentos';
        articulo3.precio = 70;
        articulo3.unidadMedida = "Kg";
        var articulo4 = new Articulo();
        articulo4.codigo = 4;
        articulo4.denominacion = 'artLimpieza2';
        articulo4.precio = 300;
        articulo4.unidadMedida = "Litro";
        this.detalle.articulos.push(articulo1);
        this.detalle.articulos.push(articulo2);
        this.detalle.articulos.push(articulo3);
        this.detalle.articulos.push(articulo4);
    };
    testB.prototype.calcularKm = function () {
        var totalKilometros = this.detalle.calcularSubTotal();
        return totalKilometros;
    };
    return testB;
}());
exports.testB = testB;
var test = new testB();
test.iniciarValores();
console.log(test.detalle.articulos)
console.log(test.detalle.calcularSubTotal());
document.body.innerHTML = String(test.calcularKm());
