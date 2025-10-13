import { Component, Input } from '@angular/core';
import { Trip } from '../../services/trip-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TripEditComponent {
  @Input() trip!: Trip;
}
