import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './accueil/inscription/inscription.component';
import { ConnexionComponent } from './accueil/connexion/connexion.component';
import { InscriptionFormComponent } from './accueil/inscription/inscription-form/inscription-form.component';
import { ConnexionFormComponent } from './accueil/connexion/connexion-form/connexion-form.component';
import { SharedService } from 'src/Service/Shared.Service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    ConnexionComponent,
    InscriptionFormComponent,
    ConnexionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
