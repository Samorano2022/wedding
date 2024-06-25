import { Component } from '@angular/core';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [],
  templateUrl: './gift.component.html',
  styleUrl: './gift.component.css',
})
export class GiftComponent {
  accountNumber = '3142030760';
  constructor() {}

  copyAccountNumber() {
    // this.clipboard.writeText(this.accountNumber);
    navigator.clipboard.writeText(this.accountNumber);
    alert('Account Number copied successfully!');
  }
}
