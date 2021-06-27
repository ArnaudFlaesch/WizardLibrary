import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { Book } from '../model/Book';
import { ApiService } from '../services/api.service';
import { BookListPageComponent } from './book-list-page.component';

describe('BookListPageComponent', () => {
  let component: BookListPageComponent;
  let fixture: ComponentFixture<BookListPageComponent>;
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  const expectedBooks: Book[] = [
    {
      isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
      title: "Henri Potier à l'école des sorciers",
      price: 35
    },
    {
      isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
      title: 'Henri Potier et la Chambre des secrets',
      price: 30
    }
  ] as Book[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BookListPageComponent],
      providers: [ApiService]
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    apiService = TestBed.inject(ApiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Devrait afficher deux livres et filtrer la liste des livres pour n'en afficher qu'un seul", fakeAsync(() => {
    expect(component.booksInCart).toEqual([]);
    expect(component.bookListFromServer).toEqual([]);
    const request = httpTestingController.expectOne(apiService.API_BASE_URL);
    expect(request.request.method).toEqual('GET');
    request.flush(expectedBooks);
    expect(component.bookListFromServer).toEqual(expectedBooks);
    expect(component.filteredBookList).toEqual(expectedBooks);
    component.searchControl.setValue('secrets');
    // On attend à cause du debounce() lié au formControl du champs de saisie
    tick(1000);
    fixture.detectChanges();
    expect(component.filteredBookList).toEqual([expectedBooks[1]]);
  }));
});
