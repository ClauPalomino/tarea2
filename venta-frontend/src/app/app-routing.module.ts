import { ProductoComponent } from './_pages/producto/producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './_pages/persona/persona.component';

const routes: Routes = [
  {path:'persona', component: PersonaComponent},
  {path:'producto',component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
