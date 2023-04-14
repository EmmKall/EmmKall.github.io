import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent
{
  items: boolean = false;

  constructor(  ){
    if( window.screen.width < 769 ){
      this.items = false;
    } else {
      this.items = true;
    }
  }

  toggleItems():void{
    this.items = !this.items;
  }

}
