import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './pages/vista/vista.component';

const routes: Routes = [
  {path:"", component: VistaComponent},
  {path: '**', redirectTo: "", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
