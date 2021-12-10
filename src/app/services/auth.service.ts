import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

}
