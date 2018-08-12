import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  noComplaints: boolean;
  complaints: any[];
  userType: String = JSON.parse(sessionStorage.getItem('user')).userType;
  constructor(private apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this.userType = JSON.parse(sessionStorage.getItem('user')).userType;
    this.apiService.getComplaints()
    .subscribe((complaints: any) => {
      this.complaints = complaints;
      this.noComplaints = complaints.length === 0;
    });
  }

  onClickComplaint = (complaint) => {
    this._router.navigate(['complaints', complaint._id]);
  }
  addComplaint = () => {
    this._router.navigate(['complaint']);
  }

}
