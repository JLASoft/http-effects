import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = '[Usuario] CARGAR USUARIO';
export const CARGAR_USUARIO_FAIL = '[Usuario] CARGAR USUARIO FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] CARGAR USUARIO SUCCESS';

export class CargarUsuarioAction implements Action
{
    readonly type = CARGAR_USUARIO;

    public constructor(public id: string) { }
}

export class CargarUsuarioFailAction implements Action
{
    readonly type = CARGAR_USUARIO_FAIL;

    public constructor(public payload: any) { }
}

export class CargarUsuarioSuccesAction implements Action
{
    readonly type = CARGAR_USUARIO_SUCCESS;

    public constructor(public usuario: Usuario) { }
}

export type UsuarioActions = CargarUsuarioAction | CargarUsuarioFailAction | CargarUsuarioSuccesAction;