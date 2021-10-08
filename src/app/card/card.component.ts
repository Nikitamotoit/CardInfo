import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  btnClick = ""

  BtnOnClick(){
    if (this.btnClick === "")
      this.btnClick = "active"
    else
      this.btnClick = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
