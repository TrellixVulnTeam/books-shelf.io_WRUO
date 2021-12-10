import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<string>;
  isUpdating$: Observable<boolean>;
  constructor(private authService: AuthService, private booksService: BooksService) {
    this.user$ = this.authService.user$;
    this.isUpdating$ = this.booksService.isUpdating$();
  }

  ngOnInit(): void {
  }

}
