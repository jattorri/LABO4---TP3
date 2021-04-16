import { Articulo } from "./Articulo";

export class DetalleFactura{

    cantidad:number;
   
    articulos:Articulo[];

    constructor(){
        this.cantidad=0;
        this.articulos=[]
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

calcularSubTotal(){

    let sumatoriaKms:number=0;
 
    for (let i in this.articulos){
    if (!this.articulos) this.articulos = [];
    sumatoriaKms +=  this.articulos[i].precio
    }
    return sumatoriaKms
    }

}

