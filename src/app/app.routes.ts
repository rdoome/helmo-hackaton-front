import { Routes } from '@angular/router';
import { RoutesEnum } from './constants/routes.enum';


export const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: RoutesEnum.DASHBOARD,
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
  },
  {
    path: RoutesEnum.PRODUCTS,
    loadComponent: () => import('./pages/products/products.component').then((c) => c.ProductsComponent),
  }
];