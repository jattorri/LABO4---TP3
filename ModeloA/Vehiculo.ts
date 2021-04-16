import { HojaRuta } from "./HojaRuta";

export class Vehiculo{

patente: string;
marca: string;
modelo: string;

hojaRuta:HojaRuta[];



constructor (){
    this.patente="";
    this.marca="";
    this.modelo="";
    this.hojaRuta=[];
}


calcularTotalKilometrosRecorridos (fechaDesde: Date,fechaHasta:Date ){
if (!this.hojaRuta) this.hojaRuta = [];

 let  sumatoriaKms:number=0;

for (let i in this.hojaRuta){       
if(this.hojaRuta[i].fecha.getTime() 
>= fechaDesde.getTime() && this.hojaRuta[i].fecha.getTime() 
<= fechaHasta.getTime())
{
sumatoriaKms += sumatoriaKms + this.hojaRuta[i].calcularTotalKilometros()
return sumatoriaKms;}
}
        
    } 

}
