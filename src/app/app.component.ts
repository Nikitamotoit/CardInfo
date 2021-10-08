import {Component, OnInit} from '@angular/core';

export interface InformCard{
  infojson: JSON
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dateJson!: JSON

  inform: InformCard[] = []

  GenCard() {

  }

  parseJSON(inform: InformCard[]) {
    var requestURL = 'https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    var json = request.response
    request.onload = function () {
      var json = request.response;
      var dataJson = json["data"]
      inform.push({infojson: dataJson[0].title})
      console.log(json)
    }
  }

  btnClick(){
    this.parseJSON(this.inform)
  }

  btnCheck(){
    console.log(this.inform[0])
  }

  ngOnInit(){
  }
}
