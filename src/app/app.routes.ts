import { Routes } from '@angular/router';
import { RoutesEnum } from './enums/routes.enum';


export const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: RoutesEnum.DASHBOARD,
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
  }
];