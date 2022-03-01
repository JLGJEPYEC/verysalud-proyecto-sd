import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  now!: Date;
  dni!: number;
  name !: string;
  lastname!: string;
  id_history!: string;
  enabled: boolean = false;
  controlDni!: FormControl;
  controlSpecialty!: FormControl;
  controlMedic!: FormControl;
  controlDate !: FormControl;
  controlSchedule !: FormControl;
  selectedPerson!: string;

  //Modulos donde se validarán los síntomas
  EsSintomas: Array<boolean> = []; 
  DescripcionObs!:string;

  constructor() {
    this.controlDni = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(8), Validators.maxLength(8)]),
      this.controlSpecialty = new FormControl('', [Validators.required]),
      this.controlMedic = new FormControl('', [Validators.required]),
      this.controlDate = new FormControl('', [Validators.required]),
      this.controlSchedule = new FormControl('', [Validators.required]),
      this.now = new Date()

  }

//seccion administradora de paciente

  searchEnsured(event: Event) {

    for (let i = 0; i < ENSUREDS_DATA.length; i++) {
      if (ENSUREDS_DATA[i].dni == this.controlDni.value) {
        this.name = ENSUREDS_DATA[i].name;
        this.lastname = ENSUREDS_DATA[i].lastname_p + " " + ENSUREDS_DATA[i].lastname_m;
        this.dni = ENSUREDS_DATA[i].dni;
        console.log(this.now.getFullYear());
        this.id_history = ENSUREDS_DATA[i].id_history;
        this.enabled = true;
        console.log(this.id_history);
        this.selectedPerson = this.name + " " + this.lastname;
        console.log(this.selectedPerson);
        return;
      } else {
        this.name = "";
        this.lastname = "";
        this.dni = 0;
        this.id_history = "";
      }
    }
  }

  generateAppointment(){ 
    let id: string = "";
    let num!:number;
    if(this.dni!=0)
       {
        alert('Cita generada \n'+ this.datosReceta())
        //resetear pantalla para que se vuelvan a registar citas
        this.dni=0;
        this.id_history="";
        this.name="";
        this.lastname="";
        this.controlDni = new FormControl('',[Validators.required, Validators.maxLength(8)]),
        this.controlSpecialty = new FormControl('',[Validators.required]),
        this.controlMedic = new FormControl('',[Validators.required]),
        this.controlDate = new FormControl('',[Validators.required]),
        this.controlSchedule = new FormControl('',[Validators.required])
        //fin del reseteo de pantalla
       }else{
         alert('Complete todos los campos')
       }
  }


  datosReceta() : string {
    var form :string = "";
    form = this.selectedPerson+"\n"+
    this.DescripcionObs ;
    console.log(this.EsSintomas.toString());
    return form;
  }

  //fin de seccion administradora de paciente

  //seccion administradora de sintomas

  inicializarSintomas() : void {
    for (let index = 0; index < 12; index++) {
      this.EsSintomas[index]=false;
    }
    console.log(this.EsSintomas);
  }

  valorModificadoSintomas (i: number): void {
    i = i-1;
    this.EsSintomas[i]=true;
  }

  verTodosSintomas () : void{
    console.log(this.EsSintomas);
  }

  //fin de seccion administradora de sintomas

  //seccion administradora de observaciones

  asignarObservaciones(obs: string) : void {
    this.DescripcionObs=obs;
  }

  obtenerObservaciones () : void {
    console.log(this.DescripcionObs);
  }

  //fin de seccion administradora de observaciones


  //funcion del boton generar receta
  generarRecetaMedica () : void {
    this.verTodosSintomas();
    this.obtenerObservaciones();
    this.generateAppointment();
    this.inicializarSintomas();
  }

  ngOnInit(): void {
    this.inicializarSintomas();
  }

  




  color: ThemePalette = 'primary';
}

