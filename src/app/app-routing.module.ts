import { ManageOrdersPageComponent } from './manage-orders-page/manage-orders-page.component';
import { BookListPageComponent } from './book-list-page/book-list-page.component';
import { CheckoutpageComponent } from './checkout-page/checkout-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: BookListPageComponent },
  { path: 'checkout', component: CheckoutpageComponent },
  { path: 'manageOrders', component: ManageOrdersPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
