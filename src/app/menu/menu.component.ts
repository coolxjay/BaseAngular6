import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  username: string = undefined;
  admin: boolean = false;
  subscription: Subscription;
    
  constructor(
  	private breakpointObserver: BreakpointObserver,
  	public dialog: MatDialog,
  	private authService: AuthService,
  	private location: Location
  ) {}
  
  ngOnInit() {
  	this.authService.loadUserCredentials();
  	this.subscription = this.authService.getUserInfo()
  	.subscribe(userInfo => {
  		this.username = userInfo.username;
  		this.admin = userInfo.admin;
  	})
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  openLoginForm() {
  	this.dialog.open(LoginComponent, {width: '500px', height: '500px'});
  }

  logOut() {
  	this.username = undefined;
  	this.admin = false;
  	this.authService.logOut();
  }

 }
