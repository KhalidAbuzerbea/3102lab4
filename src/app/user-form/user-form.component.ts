import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true,  // Marks this component as standalone
  imports: [ReactiveFormsModule, CommonModule]  // Import ReactiveFormsModule for forms and CommonModule for *ngIf
})
export class UserFormComponent {
  // Publicly expose the form group for use in the template
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with controls for each field
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern('^[1-9][0-9]{2}[1-9][0-9]{6}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Submit handler
  onSubmit() {
    if (this.userForm.valid) {
      console.log('User Data:', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
