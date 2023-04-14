import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HelpersService
{

  constructor() { }

  mostrarAlerta( title: string, text: any, icon: any, timer: number ):void
  {
    const position: any = 'center';
    Swal.fire({ position, icon, title, text, showConfirmButton: false, timer })
  }

  setToken( _jwt: string, user: string ): void
  {
    localStorage.setItem( '_jwt', _jwt );
    localStorage.setItem( 'user', user );
  }

  getToken(): string
  {
    const _jwt: string = localStorage.getItem( '_jwt' ) || '' ;
    return _jwt;
  }

  getUser(): string
  {
    const user: string = localStorage.getItem( 'user' ) || '';
    return user;
  }

  cleanLocal(): void
  {
    localStorage.clear();
  }

}
