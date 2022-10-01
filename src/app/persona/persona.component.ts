import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2'; 
import { Person } from './ModelPersona';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

// form values
profileForm =new  FormGroup({
  name: new FormControl(""),
  fullName: new FormControl(""),
  sexo: new FormControl(""),
  peso: new FormControl(0),
  altura: new FormControl(0),
  edad: new FormControl(0)

})
private persona:Person;
private submitted:boolean;
constructor(){
  this.persona = new Person();
  this.submitted = false;
}



  ngOnInit(): void {
    console.log("component ready!")
  }


  onSubmit(): any {
   const {name, altura, edad, fullName, peso, sexo} = this.profileForm.value 
  
   if(
    altura == 0 || 
    peso ==0 ||
    edad == 0 || 
    name?.trim() === "" || 
    fullName?.trim() === "" ||
    sexo?.trim() === "")
   return Swal.fire('Error', 'Please Enter full entriess', 'error');
     if(altura)  this.persona.setAltura(altura)
     if(peso)  this.persona.setPeso(peso)
     if(edad)  this.persona.setEdad(edad)
     if(name)  this.persona.setNombre(name)
     if(fullName)  this.persona.setFullName(fullName)
     if(sexo)   this.persona.setSexo(sexo)
     this.submitted = true

  }

  public checkIMC(){

    const value = this.persona.calcularIMC()
   const sexo = this.checkSexo()
   if(sexo == 'masculino'){
   if(value >=20 && value <=25) return "normal"
   else if(value <=20) return "bajo"
    else return "sobre"
   } else if(sexo == 'femenino'){
      if(value >=19 && value <=24) return "normal"
      else if(value <=19) return "bajo"
       else return "sobre"
   
  } else return ''

  }
  public checkSubmitted():boolean{
    return this.submitted
  }
  public checkSexo():string{
    return this.persona.comprobarSexo()
  }
  public checkEdad():boolean{
    return this.persona.getEdad() >= 18
  }
  public sendInformation(){
    
   return this.persona.toString()
  }
}
