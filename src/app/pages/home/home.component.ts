import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

 // private authService = inject(AuthService);
 // private router = inject(Router);

  // ----- HERO (texto + bg <img> com fallback) -----
  heroSubtitle = 'Kits solares completos (on/off-grid) — ajuste marcas e potência e receba orçamento pelo WhatsApp.';
  herderImg = '/assets/hero/solar-bg.png';


//  ngOnInit(): void {
//    if (this.authService.isLoggedIn()) {
//      this.router.navigate(['/tasks']);
//    }
//  }


}
