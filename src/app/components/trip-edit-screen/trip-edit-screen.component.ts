import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TRIPS, Trip } from '../trip-list/trip-list-data';

@Component({
    selector: 'app-trip-edit-screen',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './trip-edit-screen.component.html',
    styleUrls: ['./trip-edit-screen.component.css']
})
export class TripEditScreenComponent implements OnInit {
    tripId: string | null = null;
    trip: Trip | undefined;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.tripId = this.route.snapshot.paramMap.get('id');
        this.trip = TRIPS.find(t => t._id === this.tripId);
    }

    updateTrip(): void {
        const index = TRIPS.findIndex(t => t._id === this.tripId);
        if (index > -1 && this.trip) {
            TRIPS[index] = { ...this.trip };
        }
        this.router.navigate(['/']);
    }
}
