import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent
{
  @Input() name:        any = '';
  @Input() img:         any = '';
  @Input() description: any = '';
  @Input() tecnologies: any = '';
  @Input() url:         any = '';
  @Input() git:         any = '';

  constructior()
  { }

}
