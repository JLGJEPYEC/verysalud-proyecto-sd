import { Medic } from '../core/models/medic.models';

export const MEDICS_DATA: Medic[] = [
    {
        id: "M1", 
        dni: 72202021, 
        name: "Enrique",
        lastname: "Yañez Cardenas", 
        age: 50,
        id_specialty: "PED",
        schedules:[
                    {schedule:"8:00 - 10:00",quantity:0,max_quantity:8},
                    {schedule:"14:00 - 16:00",quantity:0,max_quantity:8},
                    {schedule:"16:00 - 18:00",quantity:0,max_quantity:8}
                  ],
        salary: 5000
    },
    {   
        id: "M2",
        dni: 72202022, 
        name: "Daniel",
        lastname: "Salaverry Muñoz", 
        age: 40,
        id_specialty:"CAR",
        schedules: [
                    {schedule:"10:00 - 12:00",quantity:0,max_quantity:8},
                    {schedule:"14:00 - 16:00",quantity:0,max_quantity:8}
                   ],
        salary: 4000
    },
    {   
        id: "M3",
        dni: 72202023, 
        name: "Gabriel",
        lastname: "Ramirez Ortega", 
        age: 40,
        id_specialty: "ODO",
        schedules:[{schedule:"14:00 - 16:00",quantity:0,max_quantity:8}],
        salary: 4500
    },
    {   
        id: "M4",
        dni: 72202024, 
        name: "Adolfo",
        lastname: "Ramirez Altamirano", 
        age: 40,
        id_specialty: "ODO",
        schedules:[{schedule:"16:00 - 18:00",quantity:0,max_quantity:8}],
        salary: 4500
    }
]