import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/models/place.model';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.scss']
})
export class TeddyBearComponent implements OnInit {
  @Input()
  userInfo: UserInfo;

  constructor() { }

  ngOnInit() {
  }

}
