import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screenshot-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screenshot-modal.html',
  styleUrl: './screenshot-modal.css'
})
export class ScreenshotModal {
  @Input() images: string[] = [];
  @Output() close = new EventEmitter<void>();

  currentIndex = 0;

  get currentImage() {
    return this.images[this.currentIndex];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  closeModal() {
    this.close.emit();
  }
}
