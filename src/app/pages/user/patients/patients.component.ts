import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  now = new Date();
  dni!: number;
  id_history!: string;
  name!: string;
  lastname_p!: string;
  lastname_m!: string;
  birthday!: Date;
  gender!: string;
  phone!: number;
  email!:string;
  civil_status!: string;
  country!: string;
  department!: string;
  district!: string;
  address!: string;

  ctrlName!: FormControl;
  ctrlLastname_p!: FormControl;
  ctrlLastname_m!: FormControl;
  ctrlDni!: FormControl;
  ctrlBirthday!: FormControl;
  ctrlGender!: FormControl;
  ctrlPhone!: FormControl;
  ctrlEmail!: FormControl;
  ctrlCivil_status!: FormControl;
  ctrlCountry!: FormControl;
  ctrlDepartment!: FormControl;
  ctrlDistrict!: FormControl;
  ctrlAddress!: FormControl;

  ctrlBuscarDni!: FormControl;

  constructor() { 
    
    this.ctrlName = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+(\s+[a-zA-ZÁÉÍÓÚáéíóúñÑ]*[\S])*$/)]);
    this.ctrlLastname_p = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+(\s+[a-zA-ZÁÉÍÓÚáéíóúñÑ]*[\S])*$/)]);
    this.ctrlLastname_m = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+(\s+[a-zA-ZÁÉÍÓÚáéíóúñÑ]*[\S])*$/)]);
    this.ctrlDni = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(8), Validators.maxLength(8)]);
    this.ctrlBirthday = new FormControl('', [Validators.required]);
    this.ctrlGender = new FormControl('', [Validators.required]);
    this.ctrlPhone = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(9), Validators.maxLength(9)]);
    this.ctrlEmail = new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]);
    this.ctrlCivil_status = new FormControl('', [Validators.required]);
    this.ctrlCountry = new FormControl('', [Validators.required]);
    this.ctrlDepartment = new FormControl('', [Validators.required]);
    this.ctrlDistrict = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+(\s+[a-zA-ZÁÉÍÓÚáéíóúñÑ]*[\S])*$/)]);
    this.ctrlAddress = new FormControl('', [Validators.required]);

    this.ctrlBuscarDni = new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
  }

  ngOnInit(): void {
  }

  registerEnsured(event: Event){
    if(this.ctrlName.valid &&
      this.ctrlLastname_p.valid &&
      this.ctrlLastname_m.valid &&
      this.ctrlDni.valid &&
      this.ctrlBirthday.valid &&
      this.ctrlGender.valid &&
      this.ctrlPhone.valid &&
      this.ctrlEmail.valid &&
      this.ctrlCivil_status.valid &&
      this.ctrlCountry.valid &&
      this.ctrlDepartment.valid &&
      this.ctrlDistrict.valid &&
      this.ctrlAddress.valid){
        ENSUREDS_DATA.push({
        dni: this.ctrlDni.value,
        id_history:("HC"+(ENSUREDS_DATA.length+1)),
        name: this.ctrlName.value,
        lastname_p: this.ctrlLastname_p.value,
        lastname_m: this.ctrlLastname_m.value,
        birthday: this.ctrlBirthday.value,
        gender: this.ctrlGender.value,
        phone: this.ctrlPhone.value,
        email: this.ctrlEmail.value,
        civil_status: this.ctrlCivil_status.value,
        country: this.ctrlCountry.value,
        department: this.ctrlDepartment.value,
        district: this.ctrlDistrict.value,
        address: this.ctrlAddress.value
        })

        alert('Se registró al asegurado correctamente')
        this.dni = 0;
        this.id_history =  "";
        this.name=  "";
        this.lastname_p=  "";
        this.lastname_m!=  "";
        this.birthday = new Date();
        this.gender=  "";
        this.phone=  0;
        this.email=  "";
        this.civil_status=  "";
        this.country=  "";
        this.department=  "";
        this.district!=  "";
        this.address!=  "";
        console.log(
          this.ctrlName.value,
          this.ctrlLastname_p.value + " " + this.ctrlLastname_m.value,
          this.ctrlDni.value,
          this.ctrlBirthday.value,
          this.ctrlGender.value,
          this.ctrlPhone.value,
          this.ctrlEmail.value,
          this.ctrlCivil_status.value,
          this.ctrlCountry.value,
          this.ctrlDepartment.value,
          this.ctrlDistrict.value,
          this.ctrlAddress.value);
        }else{
          alert('Ingrese datos correctos')
        }
      }

      searchEnsured(event:Event){
        for (let i = 0; i < ENSUREDS_DATA.length; i++) {
          if(ENSUREDS_DATA[i].dni==this.ctrlBuscarDni.value){
            this.name = ENSUREDS_DATA[i].name;
            this.lastname_p = ENSUREDS_DATA[i].lastname_p;
            this.lastname_m = ENSUREDS_DATA[i].lastname_m;
            this.birthday = ENSUREDS_DATA[i].birthday;
            this.dni = ENSUREDS_DATA[i].dni;
            this.id_history = ENSUREDS_DATA[i].id_history;
            this.gender = ENSUREDS_DATA[i].gender;
            this.phone = ENSUREDS_DATA[i].phone;
            this.email = ENSUREDS_DATA[i].email;
            this.civil_status = ENSUREDS_DATA[i].civil_status;
            this.country = ENSUREDS_DATA[i].country;
            this.department = ENSUREDS_DATA[i].department;
            this.district = ENSUREDS_DATA[i].district;
            this.address = ENSUREDS_DATA[i].address;
            return;
          }else{
            this.dni == null;
            this.id_history = "";
            this.name = "";
            this.lastname_p = "";
            this.lastname_m = "";
            this.gender = "";
            this.phone == null;
            this.email = "";
            this.civil_status = "";
            this.country = "";
            this.department = "" ;
            this.district = "";
            this.address = "";
          }
        }
      }
}
