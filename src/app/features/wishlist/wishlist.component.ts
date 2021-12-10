import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookInterface } from 'src/app/domain/models/books';
import { WishlistService } from 'src/app/services/wishlist.service';
import { BookDetailsModalService } from '../books/book-details-modal/book-details-modal.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit {
  wishbooks$: Observable<IBookInterface[]>;

  constructor(
    private readonly wishService: WishlistService,

    private readonly csModalService: BookDetailsModalService
  ) {
  }

  ngOnInit(): void {
    this.wishbooks$ = this.wishService.getWishBooks();
  }

  async onBookDetails(c: IBookInterface): Promise<void> {
    await this.csModalService.openDialog(c);
  }

}
