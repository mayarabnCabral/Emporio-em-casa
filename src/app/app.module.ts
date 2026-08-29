import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { FacaSeuPedidoComponent } from './faca-seu-pedido/faca-seu-pedido.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { VoltarTopoComponent } from './voltar-topo/voltar-topo.component';
import { PaginaCardapioComponent } from './pagina-cardapio/pagina-cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrosselComponent,
    SobreNosComponent,
    CardapioComponent,
    FacaSeuPedidoComponent,
    PaginaPrincipalComponent,
    VoltarTopoComponent,
    PaginaCardapioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
