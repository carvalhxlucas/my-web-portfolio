import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Experience } from '../models/profile.model';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  experiences: Experience[] = [];
  loading = true;

  ngOnInit() {
    this.portfolioService.getExperience().subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading experience:', error);
        this.loading = false;
      }
    });
  }
}