export interface User {
    id: string;
    username: string;
    password: string;
    id_role: string[];
    id_specialty: string[];
    name: string;
    lastname: string;
    dni: number;
    phone: number[];
    birthdate: Date;
    email: string;
    civil_status: string;
    address: string;
    gender: string;
    status: boolean
  }