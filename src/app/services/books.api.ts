import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IBookInterface } from '../domain/models/books';

@Injectable({
  providedIn: 'root'
})

export class BooksApi {
  constructor(private http: HttpClient) { }
  getAll(params: string): Observable<IBookInterface[]> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${params}&startIndex=0&maxResults=20`;
    return this.http.get<{ items: IBookInterface[] }>(url).pipe(
      map((data) => data.items),
      catchError(() => {
        return of([]);
      })
    );
  }

}
