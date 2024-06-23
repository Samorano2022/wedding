import { Component } from '@angular/core';
import { FormatNumberPipe } from '../formatNumber.pipe';

@Component({
  selector: 'app-wedding-countdown',
  standalone: true,
  imports: [FormatNumberPipe],
  templateUrl: './wedding-countdown.component.html',
  styleUrl: './wedding-countdown.component.css'
})
export class WeddingCountdownComponent {
  weddingDate = new Date('2024-07-06T00:00:00'); // Replace with your wedding date and time
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getTimeRemaining();
    // setInterval(() => {
    //   this.getTimeRemaining();
    // }, 10);
  }

  getTimeRemaining() {
    const now = new Date();
    const difference = this.weddingDate.getTime() - now.getTime();

    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }
}
