import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToPost(postName: string): void {
    this.router.navigate([`/post/${postName}`]);
  }
}
