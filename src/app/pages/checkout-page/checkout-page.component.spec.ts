import { CartItem } from '../../model/CartItem';
import { ApiService } from '../../services/api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutPageComponent } from './checkout-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;

  const cartItems = [
    {
      quantity: 1,
      book: {
        isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
        title: 'Henri Potier et la Chambre des secrets',
        price: 30
      }
    },
    {
      quantity: 2,
      book: {
        isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
        title: "Henri Potier à l'école des sorciers",
        price: 35
      }
    }
  ] as CartItem[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutPageComponent],
      providers: [ApiService],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    fixture.detectChanges();
  });

  afterAll(() => {
    localStorage.removeItem('cartItems');
  });

  it('Devrait afficher deux livres dans le panier et en retirer un', () => {
    expect(component.booksToCheckout[0].quantity).toEqual(
      cartItems[0].quantity
    );
    expect(component.booksToCheckout[1].quantity).toEqual(
      cartItems[1].quantity
    );
    expect(component.booksToCheckout[0].book.title).toEqual(
      cartItems[0].book.title
    );
    expect(component.booksToCheckout[1].book.title).toEqual(
      cartItems[1].book.title
    );

    component.removeItemFromCart(0);
    fixture.detectChanges();
    expect(component.booksToCheckout.length).toEqual(1);
    expect(component.booksToCheckout[0].quantity).toEqual(
      cartItems[1].quantity
    );
    expect(component.booksToCheckout[0].book.title).toEqual(
      cartItems[1].book.title
    );
  });
});
