import { Detalle } from "./Detalle";
import { Vehiculo } from "./Vehiculo";

export class HojaRuta {

fecha: Date;

numero: number;
detalle:Detalle[];
  

constructor (){
   this.fecha= new Date;
   this.numero=0;
   this.detalle=[]
}

calcularTotalKilometros(){

   let sumatoriaKms:number=0;

   for (let i in this.detalle){
   if (!this.detalle) this.detalle = [];
   sumatoriaKms +=  (this.detalle[i].kmRegreso - this.detalle[i].kmSalida)
   }
   return sumatoriaKms
   }
}

