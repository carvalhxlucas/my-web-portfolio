import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Skill } from '../models/profile.model';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class CertificationsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  certifications: Skill[] = [];
  loading = true;

  ngOnInit() {
    this.portfolioService.getSkills().subscribe({
      next: (data) => {
        this.certifications = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading certifications:', error);
        this.loading = false;
      }
    });
  }
}

