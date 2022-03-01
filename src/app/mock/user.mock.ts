import { User } from '../core/models/user.models';
let b1 = '1971-01-01T00:00:00'
let newd1 = new Date(b1);
let b2 = '1981-01-01T00:00:00'
let newd2 = new Date(b2);
let b3 = '1981-01-01T00:00:00'
let newd3 = new Date(b3);
let b4 = '1981-01-01T00:00:00'
let newd4 = new Date(b4);
let b5 = '2000-01-01T00:00:00'
let newd5 = new Date(b5);
export const USERS_DATA: User[] = [

    {
        id: "U1",
        username: "eyañezc",
        password: "aabbcc",
        id_role: ["R1"],
        id_specialty:["PED"],
        name: "Enrique",
        lastname: "Yañez Cardenas",
        dni: 72202021,
        phone: [987654321,9876543212],
        birthdate: newd1,
        email: "eyañezc@verysalud.com",
        civil_status: "Casado",
        address: "Av. Faucett 345, San Miguel",
        gender: "Masculino",
        status: true
    },
    {
        id: "U2",
        username: "jgutierrezj",
        password: "aabbcc",
        id_role: ["R2"],
        id_specialty:["CAR"],
        name: "Juan",
        lastname: "Gutierrez Jorgechagua",
        dni: 72202022,
        phone: [987654323,9876543214],
        birthdate: newd2,
        email: "jgutierrezj@verysalud.com",
        civil_status: "Casado",
        address: "Av. Venezuela 625, Cercado de Lima",
        gender: "Masculino",
        status: true
    },
    {
        id: "U3",
        username: "gramirezo",
        password: "aabbcc",
        id_role: ["R1"],
        id_specialty:["ODO"],
        name: "Gabriel",
        lastname: "Ramirez Ortega",
        dni: 72202023,
        phone: [987654325,9876543216],
        birthdate: newd3,
        email: "gramirezo@verysalud.com",
        civil_status: "Casado",
        address: "Av. La Marina 1453, San Miguel",
        gender: "Masculino",
        status: true
    },
    {
        id: "U4",
        username: "aramireza",
        password: "aabbcc",
        id_role: ["R1"],
        id_specialty:["ODO"],
        name: "Adolfo",
        lastname: "Ramirez Altamirano",
        dni: 72202023,
        phone: [987654327,9876543218],
        birthdate: newd4,
        email: "aramireza@verysalud.com",
        civil_status: "Casado",
        address: "Av. Brasil 170, Breña",
        gender: "Masculino",
        status: true
    },
    {
    id: "U5",
    username: "uuserp001u",
    password: "aabbcc",
    id_role: ["R1"],
    id_specialty:["ODO"],
    name: "Mirella",
    lastname: "Carpio",
    dni: 72202024,
    phone: [987654331,9876543231],
    birthdate: newd5,
    email: "user001@verysalud.com",
    civil_status: "Soltero",
    address: "Av. Bolivia 170, Breña",
    gender: "Femenino",
    status: true
}
]
