import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main.component').then(m => m.MainComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/beer-list/beer-list.component').then(m => m.BeerListComponent),
      },
      {
        path: 'beer/:id',
        loadComponent: () => import('./pages/beer-details/beer-details.component').then(m => m.BeerDetailsComponent),
      },
      {
        path: 'random',
        loadComponent: () => import('./pages/beer-random/beer-random.component').then(m => m.BeerRandomComponent),
      }
    ]

  }
];
