export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
}

export interface Role {
    id: number;
    name: string;
    description: string;
}

export interface Course {
    id: number;
    courseName: string;
    startDate: Date;
}