import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HydroisolationComponent } from './hydroisolation/hydroisolation.component';
import { SelfFloorComponent } from './self-floor/self-floor.component';
import { GruntiComponent } from './grunti/grunti.component';
import { TvitsworebadiComponent } from './tvitsworebadi/tvitsworebadi.component';
import { HidroizolaciaComponent } from './hidroizolacia/hidroizolacia.component';
import { MasalebiComponent } from './masalebi/masalebi.component';
import { ContactComponent } from './contact/contact.component';
import { PhitxiComponent } from './phitxi/phitxi.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"hydroisolation",component:HydroisolationComponent},
  {path:"self-floor",component:SelfFloorComponent},
  {path:"grunti",component:GruntiComponent},
  {path:"tvitsworebadi",component:TvitsworebadiComponent},
  {path:"hidroizolacia",component:HidroizolaciaComponent},
  {path:"masalebi",component:MasalebiComponent},
  {path:"contact",component:ContactComponent},
  {path:"pitxi",component:PhitxiComponent},
{ 
  path: "details/:title", 
  loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) 
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
