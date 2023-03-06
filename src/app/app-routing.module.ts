import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './helpers/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'training',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/training/training.module').then(m => m.TrainingModule),
  },
  {
    path: 'calories',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/calories/calories.module').then(m => m.CaloriesModule),
  },
  {
    path: 'calculators',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/calculators/calculators.module').then(m => m.CalculatorsModule),
  },
  {
    path: 'settings',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
