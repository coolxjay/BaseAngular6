import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user = {remember: false, username: '', password: ''};
	hide: boolean = true;
	isInitialized: boolean = false;

  constructor(
  	public dialogRef: MatDialogRef<LoginComponent>,
  	private authService: AuthService
  ) { }

  ngOnInit() {
  	var credentials = JSON.parse(localStorage.getItem("remember"));
  	if( credentials ) {
  		this.user.username = credentials.username;
  		this.user.password = credentials.password;
  	}
  }

  onSubmit() {

  	if( this.user.remember ) {
  		localStorage.setItem("remember", JSON.stringify({username: this.user.username, password: this.user.password}));
  	} else {
  		localStorage.removeItem("remember");
  	}

    console.log("User: ", this.user);
		this.authService.logIn(this.user)
		.subscribe(res => {
			if(res.success) {
				this.dialogRef.close();
				if( !this.isInitialized ) {
					this.authService.loadUserCredentials();
					this.isInitialized = true;
				}
			}
			else {
				this.user.username = '';
				this.user.password = '';
				this.user.remember = false;
				this.hide = true;
			}
		}, (err) => {
			this.user.username = '';
			this.user.password = '';
			this.user.remember = false;
			this.hide = true;
		});
  }

}
