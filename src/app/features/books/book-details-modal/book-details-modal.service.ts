import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBookInterface } from 'src/app/domain/models/books';
import { BookDetailsComponent } from './book-details-modal.component';

@Injectable()
export class BookDetailsModalService {
  constructor(public dialog: MatDialog) {
  }

  openDialog(data: IBookInterface): Promise<void> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(BookDetailsComponent, {
        width: '600px',
        data: data
      });

      dialogRef.afterClosed().subscribe(() => {
        resolve();
      });

    });

  }
}
