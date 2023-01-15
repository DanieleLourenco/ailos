import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Tela inicial'},
  { path: '', title: 'Favoitos'},
  { path: '', title: 'Atendimento'},
  { path: '', title: 'Cadastro' },
  { path: '', title: 'Demais telas / rotina'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems!: any[];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
