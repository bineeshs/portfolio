import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';
import { ScrollTop } from './components/scroll-top/scroll-top';
import { ScreenshotModal } from './components/screenshot-modal/screenshot-modal';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    Experience,
    Projects,
    Skills,
    Education,
    Footer,
    ScrollTop,
    ScreenshotModal,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  resumeData: any;
  showScreenshotModal = false;
  selectedScreenshots: string[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.resumeService.getResumeData().subscribe(data => {
      this.resumeData = data;
    });
  }

  openScreenshotPreview(images: string[]) {
    this.selectedScreenshots = images;
    this.showScreenshotModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeScreenshotPreview() {
    this.showScreenshotModal = false;
    this.selectedScreenshots = [];
    document.body.style.overflow = 'auto';
  }
}
