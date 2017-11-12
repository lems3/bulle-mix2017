import { SaisieTempsComponent } from './../../components/saisie-temps/saisie-temps.component';
import { GererUserComponent } from './../../components/gerer-user/gerer-user.component';
import { ConfirmerTempsComponent } from './../../components/confirmer-temps/confirmer-temps.component';
import { AchatBulleComponent } from './../../components/achat-bulle/achat-bulle.component';
import { InscriptionComponent } from './../../components/inscription/inscription.component';
import { HomeComponent } from './../../components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'achat', component: AchatBulleComponent },
  { path: 'confirme-temps', component: ConfirmerTempsComponent },
  { path: 'utilisateurs', component: GererUserComponent },
  { path: 'saisie-temps', component: SaisieTempsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
