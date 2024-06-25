import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-countdown',
  templateUrl: './wedding-countdown.component.html',
  styleUrl: './wedding-countdown.component.css',
})
export class WeddingCountdownComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2024-7-6T23:59:59');
  remainingTime: any = {};
  intervalId: any

  constructor() { }

  ngOnInit(): void {
      // this.startCountdown()
  }

  ngOnDestroy(): void {
      // this.clearInterval()
  }

  startCountdown(): void {
    // this.getTimeRemaining();
    // setInterval(() => {
    //   this.getTimeRemaining();
    // }, 1000);
  }

  clearInterval(){
    // if(this.intervalId){
    //   clearInterval(this.intervalId)
    //   this.intervalId=null
    // }
  }

  getTimeRemaining() {
    const currentTime = new Date().getTime();
    const targetTime = this.targetDate.getTime();
    const difference = targetTime - currentTime;

    if (difference <= 0) {
      // this.clearInterval();
      this.remainingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    } else {
      this.remainingTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
  }
}
