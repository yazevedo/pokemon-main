import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Adicione aqui a lógica para limpar dados de autenticação, se aplicável
    this.router.navigate(['']); // Redireciona para a página inicial
  }
}
