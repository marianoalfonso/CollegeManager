export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    token: string;
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

export interface LoginData {
    email: string | null;
    password: string | null;
}

// <T> indicamos que recibimos un argumento generico
export interface Pagination<T> {
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    // indicamos que la data va a ser del tipo generico recibido como argumento
    data: T[];
}

export interface Enrolment {
    id: string | number;
    userId: string | number;
    productId: string | number;
    student?: Student;
    course?: Course;
}