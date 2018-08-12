import { AuthGuardService } from './services/auth-guard.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ApiService } from './services/api.service';
import { ComplaintComponent } from './complaints/complaint/complaint.component';
import { ComplaintsComponent } from './complaints/complaints/complaints.component';
import { AccountComponent } from './account/account/account.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Route, Router, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddnewcomplaintComponent } from './complaints/addnewcomplaint/addnewcomplaint.component';

const routes: Route[] = [
  {
    path: '', redirectTo: 'account', pathMatch: 'full'
  },
  {
    path: 'account', component: AccountComponent
  },
  {
    path: 'complaints', component: ComplaintsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'complaints/:id', component: ComplaintComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'complaint', component: AddnewcomplaintComponent, canActivate: [AuthGuardService]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ComplaintsComponent,
    ComplaintComponent,
    AddnewcomplaintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    ApiService,
    [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
