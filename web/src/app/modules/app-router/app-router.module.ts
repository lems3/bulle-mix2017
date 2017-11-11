import { InscriptionComponent } from './../../components/inscription/inscription.component';
import { HomeComponent } from './../../components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
