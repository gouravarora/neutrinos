import { ApiService } from './../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  complaint: any = {};
  comment: FormGroup;
  constructor(private _fb: FormBuilder, private apiService: ApiService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.comment = this._fb.group({
      comment: ['', Validators.required]
    });

    this.apiService.getComplaint(this._route.params['_value'].id)
    .subscribe((complaint) => {
      this.complaint = complaint;
    });
  }

  addComment = () => {
    this.apiService.addComment(this._route.params['_value'].id, this.comment.value)
    .subscribe(() => {

    });
  }
}
