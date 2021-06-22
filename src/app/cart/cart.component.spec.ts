import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get(): string {
          return '';
        }
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
