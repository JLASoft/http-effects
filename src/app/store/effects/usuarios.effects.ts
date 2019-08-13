import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { CARGAR_USUARIOS, CargarUsuariosSuccesAction, CargarUsuariosFailAction } from '../actions/usuarios.actions';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects
{
    public constructor(private actions$: Actions, private svcUsuarios: UsuarioService)
    {

    }


    @Effect() cargarUsuarios = this.actions$
        .pipe(ofType(CARGAR_USUARIOS))
        .pipe
        (
            switchMap
            (
                () =>
                {
                    return this.svcUsuarios
                        .GetUsuarios()
                        .pipe
                        (
                            map(usuarios => new CargarUsuariosSuccesAction(usuarios)),
                            catchError(error => of(new CargarUsuariosFailAction(error)))
                        );
                }
            )
        );

}