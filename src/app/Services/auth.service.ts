import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private currentUser?: User;

  constructor() { }
}
