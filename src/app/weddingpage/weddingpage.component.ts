import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeropageComponent } from "../heropage/heropage.component";
import { StoryComponent } from "../story/story.component";
import { GiftComponent } from "../gift/gift.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { ColorcodeComponent } from "../colorcode/colorcode.component";
// import { ThankyouComponent } from "../thankyou/thankyou.component";
import { FooterComponent } from "../footer/footer.component";
import { WeddingCountdownComponent } from "../wedding-countdown/wedding-countdown.component";
import { VenueComponent } from "../venue/venue.component";
import { LovestoryComponent } from "../lovestory/lovestory.component";
// import { WeddingCountdownComponent } from "../wedding-countdown/wedding-countdown.component";

@Component({
    selector: 'app-weddingpage',
    standalone: true,
    templateUrl: './weddingpage.component.html',
    styleUrl: './weddingpage.component.css',
    imports: [HeaderComponent, HeropageComponent, StoryComponent, GiftComponent, GalleryComponent, ColorcodeComponent, FooterComponent, WeddingCountdownComponent, VenueComponent, LovestoryComponent]
})
export class WeddingpageComponent {
    
}
