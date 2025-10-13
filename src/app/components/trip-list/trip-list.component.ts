import { Component, OnInit } from '@angular/core';
import { Trip } from '../../services/trip-data';
import { TripService } from '../../services/trip-service';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';
import {  } from '../trip-edit/trip-edit.component';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
  standalone: true,
  imports: [CommonModule, TripCardComponent, ]
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];
  errorMessage = '';

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: trips => this.trips = trips,
      error: err => this.errorMessage = err
    });
  }
}
