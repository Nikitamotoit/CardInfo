import {Component, Input, OnInit} from '@angular/core';
import {InformCard} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  btnClick = ""

  @Input()
  information!: InformCard

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
