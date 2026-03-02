import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TripDataService } from '../../services/trip-data';
import { Trip } from '../../models/trip.model';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TripCardComponent],
  templateUrl: './trip-list.component.html'
})
export class TripListComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => this.trips = data,
      error: (err) => console.error(err)
    });
  }

  deleteTrip(id: string): void {
    this.tripService.deleteTrip(id).subscribe({
      next: () => this.loadTrips(),
      error: (err) => console.error(err)
    });
  }
}