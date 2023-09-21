import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
