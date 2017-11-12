import { AuthGuardService, AdminAuthGuardService, BenevoleAuthGuardService } from './../../services/auth-guard/auth-guard.service';
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
  { path: 'achat', component: AchatBulleComponent, canActivate: [AuthGuardService] },
  { path: 'confirme-temps', component: ConfirmerTempsComponent, canActivate: [AdminAuthGuardService] },
  { path: 'utilisateurs', component: GererUserComponent, canActivate: [AdminAuthGuardService] },
  { path: 'saisie-temps', component: SaisieTempsComponent, canActivate: [BenevoleAuthGuardService] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
