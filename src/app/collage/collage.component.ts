import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collage',
  standalone: true,
  imports: [],
  templateUrl: './collage.component.html',
  styleUrl: './collage.component.css'
})
export class CollageComponent {
  constructor(private router: Router) {}
  onHomee() {
    this.router.navigateByUrl('home');
  } 
}
