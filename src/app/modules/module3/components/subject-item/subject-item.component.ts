import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent implements OnInit, OnDestroy {

  public subjectResult: string;
  private subjectSubscription: Subscription;

  constructor(public _appService: AppService) { }

  ngOnInit() {
    this.subjectSubscription = this._appService
      .appSubject
      .subscribe(result => {
        this.subjectResult = result;
      });
  }

  ngOnDestroy() {
    this.subjectSubscription.unsubscribe();
  }

}
