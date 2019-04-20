import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Omar El Tokhy 1300207, importing pages
import { WelcomePage } from '../app/welcome/welcome.page';
import { TabsPage } from './tabs/tabs.page';
import { LoginPage } from '../app/login/login.page';

@NgModule({
  declarations: [AppComponent, TabsPage, WelcomePage ],
  entryComponents: [AppComponent, TabsPage, WelcomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
