import { Validators } from "@angular/forms";
import { SharedModule } from "../../../../shared/shared.module";
import { AuthService } from "../../auth.service";
import { LoginComponent } from "./login.component"
import { TestBed } from "@angular/core/testing"
import { MockProvider } from "ng-mocks"

describe('LoginComponent', () => {
    let component: LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
            ],
            imports: [
                SharedModule,
            ],
            providers: [
                MockProvider(AuthService)
            ]
        });

        component = TestBed.createComponent(LoginComponent).componentInstance;
    });

    it('el login component debe instanciarse', () => {
        // toBeTruthy chequea que no sea indefinido
        // si la prueba es exitosa, significa que el componente se instancio correctamente
        expect(component).toBeTruthy();
    });

    it('email con formato y ambos campos requeridos', () => {
        expect(component.loginForm.get('email')?.hasValidator(Validators.required)).toBeTrue();
        expect(component.loginForm.get('email')?.hasValidator(Validators.email)).toBeTrue();
        expect(component.loginForm.get('password')?.hasValidator(Validators.required)).toBeTrue();
    });

    it('formulario invalido marca campos en rojo', () => {
        // pisamos los valores del formulario a nulo para forzar el error
        component.loginForm.patchValue({
            email: '',
            password: '',
        });
        expect(component.loginForm.invalid).toBeTrue();
        // definimos un spy
        const spyOnMarkAllAsTouched = spyOn(component.loginForm, 'markAllAsTouched');
        // ejecutamos el submit para verificar el control de los campos
        component.onSubmit();
        expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
    })

})