import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Add it to your imports
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerColumns = [
    ['Website Policies & Notices',
      'Privacy Policy',
      'FOIA',
      'No Fear Act Data',
      'Digital Strategy',
      'Open Government Directive',
      'Plain Writing Act',
      'RSS Feeds & Email Updates',
      'Accessibility',
      'Vulnerability Disclosures Policy'],
    ['CATEGORIES',
      'About the FCC',
      'Proceedings & Actions',
      'Licensing & Databases',
      'Reports & Research',
      ' News & Events',
      'For Consumers'],
    ['BUREAUS & OFFICES',
      'Consumer',
      'Enforcement',
      'Inspector General',
      'Media',
      'Public Safety',
      'Space',
      'Wireless',
      'Wireline',
      'Offices']
  ]; // Replace with your actual menus (10 menus, 2 per column)
}
