import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-change-demo',
  templateUrl: './state-change.demo.component.html',
  styleUrls: ['./state-change.demo.component.scss'],
})
export class StateChangeDemoComponent implements OnInit {
  constructor() {
    console.log('state-change component constructor');
  }

  ngOnInit(): void {}
}
