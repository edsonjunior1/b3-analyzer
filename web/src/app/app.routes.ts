import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'analyse',
    loadChildren: () =>
      import('features-analyser/src/lib/lib.routes')
        .then(m => m.featuresAnalyserRoutes),
  },
  { path: '', redirectTo: 'analyse', pathMatch: 'full' },
  { path: '**', redirectTo: 'analyse' },
];
