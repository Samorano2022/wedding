import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // @Output() scrollToStory = new EventEmitter();
  // @Output() scrollToGifts = new EventEmitter();
  // @Output() scrollToGallery = new EventEmitter();
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  constructor(private router: Router) {}
    onHome() {
      this.router.navigateByUrl('home');
    }
  // generatePDF(){
  //   const doc = new jsPDF();

  //   doc.text('hello', 10, 10);
  //   doc.save('hello.pdf');
  // }

}
