import { UserService } from './../../../../services/user.service';
import { AuthService } from './../../../../services/auth.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouterState } from './../../../../core/router/router-state';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-top-menu',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatMenuModule ],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss',
})
export class TopMenu implements OnInit, OnDestroy {
  appLogo = 'assets/logo-agendador-javanauta.png';
  rotaAtual: string = '';
  inscricaoRota!: Subscription;

  private routerService = inject(RouterState);
  private authService = inject(AuthService)
  private router = inject(Router)
  private userService = inject(UserService)

  ngOnInit(): void {
    this.inscricaoRota = this.routerService.rotaAtual$.subscribe((url) => {
      this.rotaAtual = url;
    });
  }

  ngOnDestroy(): void {
    this.inscricaoRota.unsubscribe();
  }

  estaNaRotaRegister(): boolean {
    return this.rotaAtual === '/register';
  }

  estaNaRotaLogin(): boolean {
    return this.rotaAtual === '/login';
  }

  get estaLogado(): boolean{
    return this.authService.isLoggedIn()
  }

  pegarInicialUsuario(): string {

    const user = this.userService.getUser();

    if (user && user.nome) {
      return user.nome.charAt(0).toUpperCase();
    }

    return '?'
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login'])
  }
}
