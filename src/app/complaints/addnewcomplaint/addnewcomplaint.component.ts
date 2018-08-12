import { ApiService } from './../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewcomplaint',
  templateUrl: './addnewcomplaint.component.html',
  styleUrls: ['./addnewcomplaint.component.scss']
})
export class AddnewcomplaintComponent implements OnInit {

  compliant: FormGroup;
  constructor(private _fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.compliant = this._fb.group({
      title: ['', Validators.required],
      discription: ['', Validators.required]
    });
  }

  addComplaint = () => {
    this.apiService.createComplaint(this.compliant.value)
    .subscribe(() => {

    });
  }

}
