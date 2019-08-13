import { UsuariosState, usuariosReducer } from './reducers/usuarios.reducer';
import { UsuarioState, usuarioReducer } from './reducers/usuario.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState
{
    usuarios: UsuariosState,
    usuario:  UsuarioState
}

export const appReducers: ActionReducerMap<AppState> =
{
    usuarios: usuariosReducer,
    usuario: usuarioReducer
}