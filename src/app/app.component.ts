import { Component } from '@angular/core';
import { TripListComponent } from './components/trip-list/trip-list.component';

@Component({
    selector: 'app-root',
    template: '<app-trip-list></app-trip-list>',
    standalone: true,
    imports: [TripListComponent]
})
export class AppComponent { }
