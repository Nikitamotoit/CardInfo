import {Component, OnInit} from '@angular/core';

export interface InformCard{
  content: String
  title: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  inform: InformCard[] = []

  GenCard(num: number) {
    while (num > 0){
      console.log(num)
      this.parseJSON(this.inform)
      num --
    }
  }




  parseJSON(inform: InformCard[]) {
    var requestURL = 'https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
      var json = request.response;
      var dataJson = json["data"]
      inform.push({content: dataJson[0].content, title: dataJson[0].title})
      console.log(json["status"])
    }
  }

  ngOnInit(){
    this.GenCard(8)
  }
}
