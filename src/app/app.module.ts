import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ForumComponent } from './forum/forum.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
 AppComponent,
 HeaderComponent,
 FooterComponent,
 HomePageComponent,
 ProductsComponent,
 AboutComponent,
 ForumComponent,
 DetailsComponent,
 GalleryComponent,
 CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
