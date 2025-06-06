import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSource = new BehaviorSubject<string>('english');
  currentLanguage$ = this.languageSource.asObservable();

  setLanguage(lang: string) {
    this.languageSource.next(lang);
  }
}
