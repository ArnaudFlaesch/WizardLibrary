import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { ApiService } from './services/api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageOrdersPageComponent } from './pages/manage-orders-page/manage-orders-page.component';
import { CartItemDetailComponent } from './cart-item-detail/cart-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListPageComponent,
    BookDetailComponent,
    NavbarComponent,
    CartComponent,
    CheckoutPageComponent,
    ManageOrdersPageComponent,
    CartItemDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
