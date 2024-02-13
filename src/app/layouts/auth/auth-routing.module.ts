import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                // ya estamos posicionados en auth
                path: 'login',
                component: LoginComponent,
            }
        ])
    ],
    exports: [
        RouterModule,
    ]
})
export class AuthRoutingModule {}