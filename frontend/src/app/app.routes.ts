import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ExperienceComponent } from './experience/experience';
import { CertificationsComponent } from './certifications/certifications';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
