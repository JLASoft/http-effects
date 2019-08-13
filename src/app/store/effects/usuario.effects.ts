import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { CARGAR_USUARIO, CargarUsuarioSuccesAction, CargarUsuarioFailAction, CargarUsuarioAction } from '../actions/usuario.actions';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects
{
    public constructor(private actions$: Actions, private svcUsuarios: UsuarioService)
    {

    }


    @Effect() cargarUsuario = this.actions$
        .pipe(ofType(CARGAR_USUARIO))
        .pipe
        (
            switchMap
            (
                (action: CargarUsuarioAction) =>
                {
                    return this.svcUsuarios
                        .GetUsuarioById(action.id)
                        .pipe
                        (
                            map(usuario => new CargarUsuarioSuccesAction(usuario)),
                            catchError(error => of(new CargarUsuarioFailAction(error)))
                        );
                }
            )
        );

}