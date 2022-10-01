import ShortUniqueId from 'short-unique-id';
export class Person {
// declared variables
private nombre:string;
private NSS:string;
private sexo:string;
private peso:number;
private altura:number;
private edad: number;
private fullName:string;
constructor() { 
this.nombre ="";
this.edad = 0;
this.NSS = this.generarNSS();
this.sexo = "";
this.peso = 0;
this.altura = 0;
this.fullName = ""
}
public calcularIMC(){
    return (this.peso / Math.pow(this.altura, 2))
  }
  public esMayorDeEdad(){
    return this.edad >= 18
  }
  public comprobarSexo():string{
   return this.sexo.toLowerCase() == "masculino" ? "masculino" : this.sexo.toLowerCase() == "femenino" ? "femenino" : "dato erroneo";
  }
  public toString(){
    return {
      nombre: this.nombre,
      Apellidos:this.fullName,
      edad:this.edad,
      NSS:this.NSS,
      sexo:this.sexo,
      peso:this.peso,
      altura:this.altura,
     
          }
  }
  public getEdad():number{
    return this.edad
  }
  public generarNSS(){
    const uuid = new ShortUniqueId({length:8})
    return uuid()

  }



//  Setters
public setNombre(name:string): void{
    this.nombre = name
    }
    public setSexo(sexo:string):void{
    this.sexo = sexo
    }
    public setPeso(peso:number):void{
    this.peso = peso
    }
    public setAltura(altura:number):void{
        this.altura = altura
    }
    public setEdad(edad:number):void{
        this.edad = edad
    }
    public setFullName(full:string):void{
        this.fullName = full
    }


}