import { Articulo } from "./Articulo";
import { DetalleFactura } from "./DetalleFactura";
import { Factura } from "./Factura";

export class testB{

    factura:Factura;
    detalle:DetalleFactura;

    constructor(){
        this.factura = new Factura();
        this.detalle = new DetalleFactura();
    }

    iniciarValores(){
        let articulo1: Articulo = new Articulo();
        articulo1.codigo = 1;
        articulo1.denominacion = 'artLimpieza'
        articulo1.precio = 120
        articulo1.unidadMedida = "Litro"
        let articulo2: Articulo = new Articulo();
        articulo2.codigo = 2;
        articulo2.denominacion = 'artFerreteria'
        articulo2.precio = 230
        articulo2.unidadMedida = "Unidad"
        let articulo3: Articulo = new Articulo();
        articulo3.codigo = 3;
        articulo3.denominacion = 'Alimentos'
        articulo3.precio = 70
        articulo3.unidadMedida = "Kg"
        let articulo4: Articulo = new Articulo();
        articulo4.codigo = 4;
        articulo4.denominacion = 'artLimpieza2'
        articulo4.precio = 300
        articulo4.unidadMedida = "Litro"


        this.detalle.articulos.push(articulo1)
        this.detalle.articulos.push(articulo2)
        this.detalle.articulos.push(articulo3)
        this.detalle.articulos.push(articulo4) 
    }

    calcularKm(): number{
        let totalKilometros = this.detalle.calcularSubTotal();
        return totalKilometros;
      }
}

let test = new testB()
test.iniciarValores()
console.log(test.detalle.calcularSubTotal())
document.body.innerHTML = String(test.calcularKm());


