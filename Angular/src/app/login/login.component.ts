import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import 'jquery';

declare let $: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private loginFailed: boolean;

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() {
	}

	onLogin():void {
		// attempt to login
		// if bad login returned, loginFailed = true
		// otherwise = false

		let loginCreds = btoa($('#usr').val() + ':' + $('#pss').val());

		this.authService.authenticateUser(loginCreds).then((success) => {	
			// if login fails
			if (!success) {
				this.loginFailed = true;
				return;
			}

			this.loginFailed = false;
			this.router.navigate(['/resumes']);
		});
	}

	onExit(): void {
		$('#signupModal').modal('hide');
	}

	onSignup() {

	}
}