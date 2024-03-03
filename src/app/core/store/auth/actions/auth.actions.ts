import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserDetailComponent } from "../../../../layouts/dashboard/pages/users/pages/user-detail/user-detail.component";
import { User } from "../../../../layouts/models";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'setAuthUser': props<{ user: User }>(), //para esta accion indico que debo recibir el usuario
        'logout': emptyProps(),
    },
});