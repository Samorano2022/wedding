import { Component } from '@angular/core';


@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.css'
})
export class GiftComponent {
  inputValue: string = 'This text will be copied to the clipboard';

  onCopySuccess() {
    console.log('Copied to clipboard!');
  }
  }
