import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject-item',
  templateUrl: './behaviour-subject-item.component.html',
  styleUrls: ['./behaviour-subject-item.component.css']
})
export class BehaviourSubjectItemComponent implements OnInit, OnDestroy {

  public subjectBehave: string;
  private subjectBehaveSubscription: Subscription;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService
      .appBehaviorSubject
      .subscribe(result => {
        this.subjectBehave = result;
      });
  }

  ngOnDestroy() {
    this.subjectBehaveSubscription.unsubscribe();
  }

}
