import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-external-link',
  standalone: true,
  template: `
  <a [href]="link" target="_blank" rel="noopener noreferrer" class="external-link">
      {{ text }}
      <img src="assets/images/external.svg" alt="External link icon" class="icon"/>
    </a>
  `,
  styleUrls: ['./external-link.component.css']
})
export class ExternalLinkComponent {
  @Input() text = '';
  @Input() link = '';
}
