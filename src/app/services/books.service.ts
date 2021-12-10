import { Injectable } from '@angular/core';
import { IBookInterface } from '../domain/models/books';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { BooksApi } from './books.api';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  books$: BehaviorSubject<IBookInterface[]> = new BehaviorSubject<IBookInterface[]>([]);
  updating$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private booksApi: BooksApi) { }

  isUpdating$(): Observable<boolean> {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  loadBooks(params: string): Observable<IBookInterface[]> {
    this.setUpdating(true);
    return this.booksApi.getAll(params).pipe(
      tap((books) => {
        this.setBooks(books);
        this.setUpdating(false);
      })
    );
  }

  setBooks(books: IBookInterface[]) {
    return this.books$.next(books);
  }

  getBooks(): Observable<IBookInterface[]> {
    return this.books$.asObservable();
  }
}
