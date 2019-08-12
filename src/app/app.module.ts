import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CaraosalComponent } from './caraosal/caraosal.component';
import { LiveAuctionListComponent } from './live-auction-list/live-auction-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
 import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule} from '@angular/material';
import { UpcomingAuctionListComponent } from './upcoming-auction-list/upcoming-auction-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
// import {MdCardModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CaraosalComponent,
    LiveAuctionListComponent,
    ProductDetailsComponent,
    UpcomingAuctionListComponent,
    FilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MdCardModule
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
