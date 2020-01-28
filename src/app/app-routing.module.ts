import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './accueil/connexion/connexion.component';
import { InscriptionComponent } from './accueil/inscription/inscription.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  //ne pas les mettre dans la même accolade pour permettre que chaque page soit individuelle:
  { path : 'connexion', component: ConnexionComponent},
  { path : 'inscription', component: InscriptionComponent},
  { path : '', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
