import { Component, Input } from '@angular/core';
import { Trip } from '../../services/trip-data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-trip-card',
    templateUrl: './trip-card.component.html',
    styleUrls: ['./trip-card.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class TripCardComponent {
    @Input() trip!: Trip;
}
