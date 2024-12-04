import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  standalone: true,
})
export class UserDataComponent {
  userData: any;

  constructor(private route: ActivatedRoute) {
    // Retrieve data passed via navigation
    this.userData = this.route.snapshot.queryParams;
  }
}
