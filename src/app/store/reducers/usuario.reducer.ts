import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioActions, CARGAR_USUARIO, CARGAR_USUARIO_FAIL, CARGAR_USUARIO_SUCCESS } from '../actions/usuario.actions';

export interface UsuarioState
{
    usuario: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuarioState =
{
    usuario: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer(state = estadoInicial, action: UsuarioActions) : UsuarioState
{
    switch(action.type)
    {
        case CARGAR_USUARIO:
            return {
                usuario: null, 
                loaded: false,
                loading: true,
                error: null
            };
        case CARGAR_USUARIO_FAIL:
            return { 
                usuario: null, 
                loaded: false, 
                loading: false, 
                error:
                {
                    status: action.payload.status, 
                    message: action.payload.message, 
                    url: action.payload.url
                } 
            };
        case CARGAR_USUARIO_SUCCESS:
            return {
                ...state, 
                loaded: true, 
                loading: false, 
                usuario: action.usuario
            };
            
        default:
            return state;
    }
}