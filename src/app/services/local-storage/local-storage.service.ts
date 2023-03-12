import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setDataToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getDataFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
