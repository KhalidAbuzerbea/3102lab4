import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDataComponent } from './user-data/user-data.component'; // New component to display data

export const routes: Routes = [
  { path: '', redirectTo: 'user-form', pathMatch: 'full' }, // Default route
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-data', component: UserDataComponent }, // Route to display submitted data
];
