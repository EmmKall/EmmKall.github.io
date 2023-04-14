import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: '**', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true }),
  RouterModule.forChild( routes ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
