import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  rawPhone = '5562991795838';
  displayPhone = '(62) 99179-5838';
  waLink = `https://wa.me/${this.rawPhone}?text=${encodeURIComponent('Olá! Quero orçamento de kit solar da Segurança Prime.')}`;

  private emailUser = 'contato';
  private emailDomain = 'segurancaprime.com.br';
  emailHref = `mailto:${this.emailUser}%40${this.emailDomain}`;
}
