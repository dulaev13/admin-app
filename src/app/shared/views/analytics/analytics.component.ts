import { Component, OnInit } from '@angular/core';
import { TestClassService } from '../../../servises/test.abs.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor(
    private testClass : TestClassService
  ) { }

  ngOnInit() {

  }
  testF():void{
    this.testClass.checkUser('ivan')
  }

}
