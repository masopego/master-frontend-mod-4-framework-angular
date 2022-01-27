import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './organism/footer/footer.component';
import { HeaderComponent } from './organism/header/header.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { PrivateNavbarComponent } from './molecules/private-navbar/private-navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PrivateNavbarComponent,
    LoginComponent,
    AboutUsComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
