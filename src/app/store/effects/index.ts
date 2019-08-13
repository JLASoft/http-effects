import { UsuariosEffects } from "./usuarios.effects";
import { UsuarioEffects } from './usuario.effects';

export const appEffects: Array<any> =
[
    UsuariosEffects,
    UsuarioEffects
];

export * from "./usuarios.effects";
export * from "./usuario.effects";