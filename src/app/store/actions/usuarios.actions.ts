import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] CARGAR USUARIOS';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] CARGAR USUARIOS FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] CARGAR USUARIOS SUCCESS';

export class CargarUsuariosAction implements Action
{
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFailAction implements Action
{
    readonly type = CARGAR_USUARIOS_FAIL;

    public constructor(public payload: any) { }
}

export class CargarUsuariosSuccesAction implements Action
{
    readonly type = CARGAR_USUARIOS_SUCCESS;

    public constructor(public usuarios: Array<Usuario>) { }
}

export type UsuariosActions = CargarUsuariosAction | CargarUsuariosFailAction | CargarUsuariosSuccesAction;