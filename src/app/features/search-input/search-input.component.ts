import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
  inputSearch$: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchHandler();
  }

  ngOnDestroy(): void {
    if (this.inputSearch$) {
      this.inputSearch$.unsubscribe();
    }
  }

  searchHandler(): void {
    this.inputSearch$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((value) => this.searchValue.emit(value));
  }

  inputHandler($event: Event): void {
    const searchValue = ($event.target as HTMLInputElement).value.toLowerCase().trim();
    this.inputSearch$.next(searchValue);
  }
}
