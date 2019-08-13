import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuariosAction } from 'src/app/store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy
{
    public usuarios: Array<Usuario>;
    private suscripcion: Subscription;
    public loading: boolean;
    public error: any;

    public constructor(private store: Store<AppState>)
    {
        this.usuarios = new Array<Usuario>();
        this.suscripcion =  new Subscription();
    }

    ngOnInit()
    {
        // this.suscripcion = this.svcUsuario.GetUsuarios()
        //     .subscribe
        //     (
        //         (usuarios: any) => this.usuarios = usuarios.data
        //     );

        this.suscripcion = this.store.select('usuarios').subscribe
        (
            data =>
            {
                this.usuarios = data.usuarios;
                this.loading = data.loading;
                this.error = data.error;
            }
        );

        this.store.dispatch(new CargarUsuariosAction());
    }

    ngOnDestroy()
    {
        this.suscripcion.unsubscribe();
    }
}
