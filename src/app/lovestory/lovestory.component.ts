import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lovestory',
    standalone: true,
    templateUrl: './lovestory.component.html',
    styleUrl: './lovestory.component.css',
    imports: []
})
export class LovestoryComponent {
    constructor(private router: Router) {}
    onHome() {
      this.router.navigateByUrl('home');
    }
   
}
