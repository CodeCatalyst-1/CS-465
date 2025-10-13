import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TRIPS } from './trip-list-data';

@Component({
    selector: 'app-trip-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './trip-list.component.html'
})
export class TripListComponent {
    trips = TRIPS;
}
