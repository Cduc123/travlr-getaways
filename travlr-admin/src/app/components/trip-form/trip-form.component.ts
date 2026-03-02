import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TripDataService } from '../../services/trip-data';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './trip-form.component.html'
})
export class TripFormComponent implements OnInit {

  trip: Trip = {
    destination: '',
    duration: '',
    price: ''
  };

  isEdit = false;
  tripId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.params['id'];

    if (this.tripId) {
      this.isEdit = true;
      this.tripService.getTrip(this.tripId).subscribe({
        next: (data) => this.trip = data,
        error: (err) => console.error(err)
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.tripService.updateTrip(this.tripId, this.trip).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error(err)
      });
    } else {
      this.tripService.addTrip(this.trip).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error(err)
      });
    }
  }
}