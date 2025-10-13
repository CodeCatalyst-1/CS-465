import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trip } from './trip-data';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  getTrips(): Observable<Trip[]> {
    return of([
      { _id: '1', name: 'Hawaii Trip', location: 'Hawaii', price: 2500, description: 'Sunny beaches', duration: 7, imageUrl: 'https://via.placeholder.com/150' },
      { _id: '2', name: 'Alaska Trip', location: 'Alaska', price: 3000, description: 'Glaciers and wildlife', duration: 10, imageUrl: 'https://via.placeholder.com/150' }
    ]);
  }
}
