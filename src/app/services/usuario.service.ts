import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService
{
    private api: string ='https://reqres.in/api';
    public constructor(private http: HttpClient)
    {
    }

    public GetUsuarios()
    {
        return this.http
            .get(`${this.api}/users?per_page=6`)
            .pipe(map(resp => resp['data']));
    }

    public GetUsuarioById(id: string)
    {
        return this.http
            .get(`${this.api}/users/${id}?delay=1`)
            .pipe(map(resp => resp['data']));
    }
}
