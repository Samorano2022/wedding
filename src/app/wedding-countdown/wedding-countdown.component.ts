import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding-countdown',
  templateUrl: './wedding-countdown.component.html',
  styleUrl: './wedding-countdown.component.css',
  standalone: true,
})
export class WeddingCountdownComponent {
  constructor(private router: Router) {}
  onCollage() {
    this.router.navigateByUrl('collage');
  }
}
// export class WeddingCountdownComponent implements OnInit, OnDestroy {
//   isBrowser!: boolean;
//   targetDate: Date = new Date('2024-08-07T23:59:59');
//   remainingTime: any = {};
//   private intervalId: any;

//   constructor(@Inject(PLATFORM_ID) private platformId: object) {
//     this.isBrowser = isPlatformBrowser(this.platformId);
//   }

//   ngOnInit(): void {
//     if (this.isBrowser) {
//       this.startCountdown();
//     }
//   }

//   ngOnDestroy(): void {
//     if (this.isBrowser) {
//       this.clearInterval();
//     }
//   }

//   startCountdown(): void {
//     if (this.isBrowser) {
//       this.updateRemainingTime();
//       this.intervalId = window.setInterval(() => {
//         this.updateRemainingTime();
//       }, 1000);
//     }
//   }

//   clearInterval(): void {
//     if (this.isBrowser && this.intervalId) {
//       if (this.intervalId) {
//         clearInterval(this.intervalId);
//         this.intervalId = null;
//       }
//     }
//   }

//   updateRemainingTime(): void {
//     const currentTime = new Date().getTime();
//     const targetTime = this.targetDate.getTime();
//     const difference = targetTime - currentTime;

//     if (difference <= 0) {
//       this.clearInterval();
//       this.remainingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     } else {
//       this.remainingTime = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor(
//           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         ),
//         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((difference % (1000 * 60)) / 1000),
//       };
//     }
//   }
// }
