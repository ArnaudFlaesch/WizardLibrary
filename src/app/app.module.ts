import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './services/book.service';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookDetailComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
