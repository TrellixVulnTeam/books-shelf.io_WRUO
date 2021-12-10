import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BooksRoutingModule } from '../books/books.routing';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details-modal/book-details-modal.component';
import { BookDetailsModalService } from './book-details-modal/book-details-modal.service';
import { SearchInputModule } from '../search-input/search-input.module';

const components = [BookDetailsComponent, BooksComponent];
const services = [BookDetailsModalService];
const modules = [SharedModule, BooksRoutingModule, SearchInputModule];

@NgModule({
  declarations: [
    ...components
  ],
  providers: [
    ...services
  ],
  imports: [
    ...modules
  ]
})
export class BooksModule { }
