import { Ensured } from '../core/models/ensured.models';
let b1 = '1996-01-01T00:00:00'
let newd1 = new Date(b1);
let b2 = '2001-01-01T00:00:00'
let newd2 = new Date(b2);

export const ENSUREDS_DATA: Ensured[] = [
    {
        dni: 78013021,
        id_history:"HC1",
        name: 'Adrian',
        lastname_p: 'Lazaro',
        lastname_m: 'Llacua',
        birthday: newd1,
        gender: "Masculino",
        phone: 983847371,
        email: "erick.lazaro@unmsm.edu.pe",
        civil_status: "Soltero",
        country: "Perú",
        department: "Lima",
        district: "San Juan de Miraflores",
        address: "Av. independencia 1548"
    },
    {
        dni: 78013022,
        id_history:"HC2",
        name: 'Gustavo',
        lastname_p: 'Moreno',
        lastname_m: 'Tito',
        birthday: newd2,
        gender: "Masculino",
        phone: 983847371,
        email: "kurane@gmail.com",
        civil_status: "Soltero",
        country: "Perú",
        department: "Lima",
        district: "San Juan de Miraflores",
        address: "Av. independencia 1548"
    }
];
