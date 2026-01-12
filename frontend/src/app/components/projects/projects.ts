import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  @Input() data: any[] = [];
  @Output() previewScreenshots = new EventEmitter<string[]>();

  viewScreenshots(screenshots: string[]) {
    if (screenshots && screenshots.length > 0) {
      this.previewScreenshots.emit(screenshots);
    }
  }
}
