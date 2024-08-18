import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RenderDataFramesComponent } from '../render-data-frames/render-data-frames.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'render/:value', component: RenderDataFramesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
