import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, observable, switchMap } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.novoUsuarioService.vericaUsuarioExistente(nomeUsuario)),
        map((usuarioExiste) => usuarioExiste ? { usuarioExistente: true } : null),
        first()
      )
    }
  }

}
