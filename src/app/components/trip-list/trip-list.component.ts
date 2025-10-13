import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip-service';
import { Trip } from '../../services/trip-data';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
    selector: 'app-trip-list',
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip-list.component.css'],
    standalone: true,
    imports: [CommonModule, TripCardComponent]
})
export class TripListComponent implements OnInit {

    trips: Trip[] = [];
    errorMessage?: string;

    constructor(private tripService: TripService) { }

    ngOnInit(): void {
        this.tripService.getTrips().subscribe({
            next: (data: Trip[]) => this.trips = data,
            error: err => this.errorMessage = 'Failed to load trips'
        });
    }

}
