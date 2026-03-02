import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripDataService } from '../../services/trip-data.service';
import { Trip } from '../../models/trip';
import { TripCardC } from '../trip-card/trip-card.component';

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

  loadTrips() {
    this.tripService.getTrips().subscribe(data => {
      this.trips = data;
    });
  }

  deleteTrip(id: string) {
    this.tripService.deleteTrip(id).subscribe(() => {
      this.loadTrips();
    });
  }
}