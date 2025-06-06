import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HydroisolationComponent } from './hydroisolation/hydroisolation.component';
import { SelfFloorComponent } from './self-floor/self-floor.component';
import { GruntiComponent } from './grunti/grunti.component';
import { TvitsworebadiComponent } from './tvitsworebadi/tvitsworebadi.component';
import { HidroizolaciaComponent } from './hidroizolacia/hidroizolacia.component';
import { MasalebiComponent } from './masalebi/masalebi.component';
import { ContactComponent } from './contact/contact.component';
import { PhitxiComponent } from './phitxi/phitxi.component';




export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HydroisolationComponent,
    SelfFloorComponent,
    GruntiComponent,
    TvitsworebadiComponent,
    HidroizolaciaComponent,
    MasalebiComponent,
    ContactComponent,
    PhitxiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
