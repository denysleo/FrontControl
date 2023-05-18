import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) { }
  OnInit() {

  }
  ajuda(): void {
    this.navegacao("ajuda");
  }

  registro(): void {
    this.navegacao("registro")
  }

  historico(): void {
    this.navegacao("historico")
  }
  suporte(): void {
    this.navegacao("suporte")
  }
  home():void{
    this.navegacao("home")
  }
  navegacao(link: string) {
    this.router.navigate([link]);
  }
}
