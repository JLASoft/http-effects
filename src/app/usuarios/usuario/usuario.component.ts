import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuarioAction } from 'src/app/store/actions/usuario.actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit
{
    public usuario: Usuario;
    public loading: boolean;
    public error: any;

    public constructor(private router: ActivatedRoute, private store: Store<AppState>)
    {
      
    }

    ngOnInit()
    {
        this.router.params.subscribe
        (
            params => this.store.dispatch(new CargarUsuarioAction(params.id))
        );

        this.store.select('usuario').subscribe
        (
            data =>
            {
                this.usuario = data.usuario;
                this.loading = data.loading;
                this.error = data.error;
            }
        );
    }
}
