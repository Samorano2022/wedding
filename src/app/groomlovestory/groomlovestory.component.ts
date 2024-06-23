import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groomlovestory',
  standalone: true,
  imports: [],
  templateUrl: './groomlovestory.component.html',
  styleUrl: './groomlovestory.component.css'
})
export class GroomlovestoryComponent {
  constructor(private router: Router) {}
    onHome() {
      this.router.navigateByUrl('home');
    }
}
