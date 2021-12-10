import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BooksModule } from './features/books/books.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    BooksModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
