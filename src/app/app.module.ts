import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './services/book.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CheckoutpageComponent } from './pages/checkoutpage/checkoutpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    NavbarComponent,
    CartComponent,
    HomepageComponent,
    CheckoutpageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
