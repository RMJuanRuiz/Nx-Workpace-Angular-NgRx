import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () => import('@rm-company/admin').then((m) => m.AdminModule),
  },
  {
    path: 'tour',
    loadChildren: () =>
      import('@rm-company/visitor').then((m) => m.VisitorModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour',
  },
];
