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

  GenCard() {
    let randNum = Math.floor(Math.random() * (10 - 1) + 1)
    // this.parseJSON(this.inform)
    while (randNum > 0){
      console.log(randNum)
      this.parseJSON(this.inform)
      randNum --
    }
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
      inform.push({content: dataJson[0].content, title: dataJson[0].title})
      console.log(json["status"])
    }
  }

  btnCheck(){
    for(let i = 0; i < this.inform.length; i++){
      console.log(this.inform[i])
    }
  }

  ngOnInit(){
  }
}
