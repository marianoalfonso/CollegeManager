import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing"
import { StudentsService } from "./students.service"

describe('Testeos unitarios para students.service.ts', () => {

    let studentService: StudentsService;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StudentsService
            ],
            imports: [
                HttpClientTestingModule
            ],
        });
        // le asignamos valor sino queda undefined
        // en inject recibe por argumento el nombre de la clase del servicio que se desea testear
        studentService = TestBed.inject(StudentsService);
        httpController = TestBed.inject(HttpTestingController);
    })

    it ('studentService debe existir y ser instanciada', () => {
        expect(studentService).toBeTruthy();
    });
});