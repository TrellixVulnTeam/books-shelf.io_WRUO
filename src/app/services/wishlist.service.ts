import { Injectable } from '@angular/core';
import { IBookInterface } from '../domain/models/books';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WishlistService {
  wishBooks$: BehaviorSubject<IBookInterface[]> = new BehaviorSubject<IBookInterface[]>([]);

  constructor() { }

  setWishBooks(wishBooks: IBookInterface[]) {
    return this.wishBooks$.next(wishBooks);
  }

  getWishBooks(): Observable<IBookInterface[]> {
    return this.wishBooks$.asObservable();
  }
}
