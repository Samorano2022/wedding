import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeropageComponent } from '../heropage/heropage.component';
import { StoryComponent } from '../story/story.component';
import { GiftComponent } from '../gift/gift.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ColorcodeComponent } from '../colorcode/colorcode.component';
import { FooterComponent } from '../footer/footer.component';
import { WeddingCountdownComponent } from '../wedding-countdown/wedding-countdown.component';
import { VenueComponent } from '../venue/venue.component';
import { LovestoryComponent } from '../lovestory/lovestory.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import AOS from 'aos';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-weddingpage',
  standalone: true,
  templateUrl: './weddingpage.component.html',
  styleUrl: './weddingpage.component.css',
  imports: [
    HeaderComponent,
    HeropageComponent,
    StoryComponent,
    GiftComponent,
    GalleryComponent,
    ColorcodeComponent,
    FooterComponent,
    VenueComponent,
    LovestoryComponent,
    WeddingCountdownComponent,
    AnimateOnScrollModule, 
  
  ],
})
export class WeddingpageComponent {
  constructor(){}

  @ViewChild('story', { static: false }) story!: ElementRef;
  @ViewChild('gifts', { static: false }) gifts!: ElementRef;
  @ViewChild('gallery', { static: false }) gallery!: ElementRef;

  scrollToStory() {
    this.story.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  scrollToGifts() {
    this.gifts.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollToGallery() {
    this.gallery.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // toVenue(){
  //   document.getElementById("venue").scrollIntoView({behavior:'smooth'});
  // }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toStory(){
    document.getElementById("story")?.scrollIntoView({behavior: "smooth"});
  }
  toGift(){
    document.getElementById("gift")?.scrollIntoView({behavior: "smooth"});
  }toGallery(){
    document.getElementById("gallery")?.scrollIntoView({behavior: "smooth"});
  }
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
  }
  ngOnInit() {
    AOS.init();
  }
}
