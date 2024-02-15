import { TestBed } from "@angular/core/testing"
import { AuthService } from "./auth.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { User } from "../models";

describe('pruebas del servicio de autenticacion', () => {
    let service: AuthService;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthService,
            ],
            imports: [
                HttpClientTestingModule,
            ]
        });
        // asignamos valor a las variables
        service = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('instanciacion de la clase authService', () => {
        // chequeamos que no sea undefined 
        expect(service).toBeTruthy();
    })

    it('seteo de authUser en el login', () => {
        const mockUser: User[] = [{
            id: 12,
            firstName: 'firstMockName',
            lastName: 'lastMockName',
            email: 'some@some.com',
            password: 'something',
            role: 'admin',
            token: 'kjhlkjhlaskjdhfpsdf'
        }]
        service.logIn({ email: 'some@some.com', password: 'something'}).subscribe({
            next: (user) => expect(service.authUser).toBeTruthy() //no debe ser null o undefined
        });

        httpController.expectOne({
            // hay que sustituir la peticion donde la url sea la siguiente
            url: 'http://localhost:3000/users?email=some@some.com&password=something',
            method: 'GET',
        }).flush(mockUser);

    })
})