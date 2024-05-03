import { Component } from '@angular/core';
import { ExternalLinkComponent } from '../../components/external-link/external-link.component';
import {AlertBannerComponent} from '../../components/alert-banner/alert-banner.component'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ AlertBannerComponent,ExternalLinkComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
