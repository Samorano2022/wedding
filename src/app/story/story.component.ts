import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  constructor(private router: Router) {}
  onBride() {
    this.router.navigateByUrl('lovestory');
  } 
  onGroom() {
    this.router.navigateByUrl('groomstory');
  }
}
