import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management System';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Hamza",
		last_name : "Farooq",
		email : "hf@educative.io",
		phone : 9503733178,
		department : "TCE"
	},
	{
		id : 2,
		first_name : "Aafaq",
		last_name : "Sabir",
		email : "as@educative.io",
		phone : 8574889658,
		department : "TCE"
	},
	{
		id : 3,
		first_name : "Ayaz",
		last_name : "ur Rehman",
		email : "aur@educative.io",
		phone : 7485889658,
		department : "fareed institute"
	},
	{
		id : 4,
		first_name : "Maryam",
		last_name : "Tanvir",
		email : "mt@educative.io",
		phone : 9685589748,
		department : "TCE"
	},
	{
		id : 5,
		first_name : "Usama",
		last_name : "Ashraf",
		email : "ua@educative.io",
		phone : 8595856547,
		department : "TCE"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}