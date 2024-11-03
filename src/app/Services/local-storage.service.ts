import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(name:string):string{
   return localStorage.getItem(name) ?? 'ar'
  }

  setItem(name:string, value:string){
    localStorage.setItem(name, value)
  }
}
