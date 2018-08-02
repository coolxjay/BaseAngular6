
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatRadioModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GetStartedComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
		MatFormFieldModule,
		MatInputModule,
		MatCheckboxModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatDatepickerModule,
		MatRadioModule,
		MatSliderModule,
		MatSlideToggleModule,
		HttpClientModule,
		FlexLayoutModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [

	],
  bootstrap: [AppComponent]
})
export class AppModule { }
