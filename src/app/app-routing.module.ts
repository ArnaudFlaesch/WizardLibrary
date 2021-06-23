import { BookListComponent } from './book-list/book-list.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: BookListComponent },
  { path: 'checkout', component: CheckoutpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
