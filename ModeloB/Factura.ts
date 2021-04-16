export class Factura{
    letra:string;
    numero:number;
    recargo:number;
    tipoPago:string;
    totalItem:number;
    fecha:Date

    constructor(){
        this.letra="";
        this.numero=0;
        this.recargo=0;
        this.tipoPago="";
        this.totalItem=0;
        this.fecha = new Date();
    }
}