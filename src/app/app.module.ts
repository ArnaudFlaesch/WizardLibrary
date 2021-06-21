import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [AppComponent, BookListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
