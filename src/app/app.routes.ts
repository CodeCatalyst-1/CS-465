import { Routes } from '@angular/router';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { TripEditScreenComponent } from './components/trip-edit-screen/trip-edit-screen.component';

export const routes: Routes = [
    { path: '', component: TripListComponent },
    { path: 'edit/:id', component: TripEditScreenComponent },
    { path: '**', redirectTo: '' }
];
