import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaCardapioComponent } from './pagina-cardapio/pagina-cardapio.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';



const routes: Routes = [
  {path:"", redirectTo:"pagina-principal", pathMatch:"full"},
  {path:"navbar", component:NavbarComponent},
  {path:"pagina-principal", component:PaginaPrincipalComponent},
  {path:"pagina-cardapio", component:PaginaCardapioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
