import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-card.component.html'
})
export class TripCardComponent {

  @Input() trip!: Trip;
  @Output() deleteEvent = new EventEmitter<string>();

  deleteTrip(): void {
    if (this.trip._id) {
      this.deleteEvent.emit(this.trip._id);
    }
  }
}