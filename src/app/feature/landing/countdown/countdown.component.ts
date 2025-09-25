import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';

interface ITimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
@Component({
  selector: 'mc-countdown',
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {

  public timeLeft: WritableSignal<ITimeLeft> = signal<ITimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  private readonly targetDateStr = '2025-10-01T23:59:59';
  private targetDate: Date = new Date();
  private intervalId: number | undefined;

  ngOnInit(): void {
    this.targetDate = new Date(this.targetDateStr);
    this.updateCountdown();
    this.intervalId = Number(setInterval(() => this.updateCountdown(), 1000));
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.timeLeft.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(this.intervalId);
    } else {
      this.timeLeft.set({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      console.log(this.intervalId)
      clearInterval(this.intervalId);
    }
  }
}
