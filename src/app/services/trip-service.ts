import { Injectable } from '@angular/core';
import { Trip } from './trip-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  getTrips(): Observable<Trip[]> {
    return of([
      { _id: '1', name: 'Hawaii Trip', location: 'Hawaii', price: 2500, description: 'Sunny beaches', duration: 7, imageUrl: 'https://via.placeholder.com/150' },
      { _id: '2', name: 'Alaska Trip', location: 'Alaska', price: 3000, description: 'Glaciers and wildlife', duration: 10, imageUrl: 'https://via.placeholder.com/150' },
      { _id: '3', name: 'Japan Trip', location: 'Japan', price: 4000, description: 'Cherry blossoms', duration: 8, imageUrl: 'https://via.placeholder.com/150' }
    ]);
  }
}
