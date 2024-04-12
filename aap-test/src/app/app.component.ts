import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {AlertBannerComponent} from './alert-banner/alert-banner.component'
import { FooterComponent } from './footer/footer.component';
import { ExternalLinkComponent } from './external-link/external-link.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AlertBannerComponent,FooterComponent,ExternalLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FCC';
}