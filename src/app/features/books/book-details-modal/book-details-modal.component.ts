import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBookInterface } from 'src/app/domain/models/books';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailsComponent implements OnInit {
  public title: string = 'Book Details';
  public book: IBookInterface;
  public imgUrl: string = '';
  private books: IBookInterface[];
  constructor(
    public dialogRef: MatDialogRef<BookDetailsComponent>,
    private wishService: WishlistService,
    @Inject(MAT_DIALOG_DATA) public data: IBookInterface) {
    this.book = data;
  }
  ngOnInit(): void {
    this.wishService.getWishBooks().subscribe({
      next: (books) => {
        this.books = books;
      }
    });
  }

  onWishToggle() {
    this.book.isWished = !this.book.isWished;
    if (this.books.some(b => b.id === this.book.id)) {
      const filtered = this.books.filter(b => b.id !== this.book.id);
      this.wishService.setWishBooks(filtered);
    } else {
      this.books.push(this.book);
      this.wishService.setWishBooks(this.books);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
