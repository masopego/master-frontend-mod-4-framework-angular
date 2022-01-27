import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/organism/footer/footer.component';
import { HeaderComponent } from './components/organism/header/header.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { PrivateNavbarComponent } from './components/molecules/private-navbar/private-navbar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { CrudComponent } from './components/pages/crud/crud.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ButtonComponent } from './components/atoms/button/button.component';

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
    ProfileComponent,
    ButtonComponent,
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
