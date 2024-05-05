import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-banner',
  standalone: true,
  imports: [CommonModule], // Include CommonModule here
  templateUrl: './alert-banner.component.html',
  styleUrls: ['./alert-banner.component.css']
})
export class AlertBannerComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() closable: boolean = false;

  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }
}
