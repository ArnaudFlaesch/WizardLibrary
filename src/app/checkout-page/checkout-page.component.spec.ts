import { ApiService } from '../services/api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutpageComponent } from './checkout-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CheckoutpageComponent', () => {
  let component: CheckoutpageComponent;
  let fixture: ComponentFixture<CheckoutpageComponent>;

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
      declarations: [CheckoutpageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ApiService
      ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
