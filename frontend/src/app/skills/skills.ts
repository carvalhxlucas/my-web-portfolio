import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Skill } from '../models/profile.model';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  private portfolioService = inject(PortfolioService);
  skills: Skill[] = [];
  loading = true;

  ngOnInit() {
    this.portfolioService.getSkills().subscribe({
      next: (data) => {
        this.skills = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading skills:', error);
        this.loading = false;
      }
    });
  }
}