import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetailsModalService } from './book-details-modal/book-details-modal.service';
import { IBookInterface } from '../../domain/models/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {
  books$: Observable<IBookInterface[]>;

  constructor(
    private readonly booksService: BooksService,
    private readonly csModalService: BookDetailsModalService
  ) {
  }

  ngOnInit(): void {
    this.loadBooks('Elon Musk');
    this.books$ = this.booksService.getBooks();
  }

  loadBooks(toSearch: string): void {
    this.booksService.loadBooks(toSearch).subscribe();
  }

  async onBookDetails(c: IBookInterface): Promise<void> {
    await this.csModalService.openDialog(c);
  }

  onSearch(result: string): void {
    this.loadBooks(result);
  }
}
