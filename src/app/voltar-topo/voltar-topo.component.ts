import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voltar-topo',
  templateUrl: './voltar-topo.component.html',
  styleUrls: ['./voltar-topo.component.css']
})
export class VoltarTopoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   voltarAoTopo() {
    window.scroll(0, 0)
  }

}
