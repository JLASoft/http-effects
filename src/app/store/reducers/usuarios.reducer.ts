import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosActions, CARGAR_USUARIOS, CARGAR_USUARIOS_FAIL, CARGAR_USUARIOS_SUCCESS } from '../actions/usuarios.actions';

export interface UsuariosState
{
    usuarios: Array<Usuario>;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState =
{
    usuarios: [],
    loaded: false,
    loading: false,
    error: null
};

export function usuariosReducer(state = estadoInicial, action: UsuariosActions) : UsuariosState
{
    switch(action.type)
    {
        case CARGAR_USUARIOS:
            return {
                ...state, 
                loading: true,
                error: null
            };
        case CARGAR_USUARIOS_FAIL:
            return { 
                ...state, 
                loading: false, 
                loaded: false, 
                error:
                {
                    status: action.payload.status, 
                    message: action.payload.message, 
                    url: action.payload.url
                } 
            };
        case CARGAR_USUARIOS_SUCCESS:
            return {
                ...state, 
                loading: false, 
                loaded: true, 
                usuarios: [...action.usuarios]
            };
            
        default:
            return state;
    }
}