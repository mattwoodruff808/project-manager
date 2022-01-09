import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { users, User } from '../mock-data/mockUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = { id: 0, name: '', email: '' };

  constructor() { }

  // Temporary until I have a backend
  verifyUser(email: string, password: string): User | undefined {
    return users.find(user => user.email === email && user.password === password);
  }

  getUser(): User {
    return this.user;
  }
}
