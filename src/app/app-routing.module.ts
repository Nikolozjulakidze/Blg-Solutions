import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ForumComponent } from './forum/forum.component';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"about",component:AboutComponent},
  {path:"products",component:ProductsComponent},
  {path:"forum",component:ForumComponent},
  {path:"details/:slug",component:DetailsComponent},
  {path:"gallery", component:GalleryComponent},
  {path: "card", component:CardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
