import { AuthGuardService, AdminAuthGuardService, BenevoleAuthGuardService } from './services/auth-guard/auth-guard.service';
import { UserService } from './services/user/user.service';
import { routing } from './modules/app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AchatBulleComponent } from './components/achat-bulle/achat-bulle.component';
import { SaisieTempsComponent } from './components/saisie-temps/saisie-temps.component';
import { GererUserComponent } from './components/gerer-user/gerer-user.component';
import { ConfirmerTempsComponent } from './components/confirmer-temps/confirmer-temps.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomeComponent,
    InscriptionComponent,
    ConnexionComponent,
    AchatBulleComponent,
    SaisieTempsComponent,
    GererUserComponent,
    ConfirmerTempsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserService,
    AuthGuardService,
    AdminAuthGuardService,
    BenevoleAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
