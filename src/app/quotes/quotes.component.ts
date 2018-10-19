import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quotes=[
    new Quotes("Old is gold","Katana",0,0),
    new Quotes("What goes around, comes around","Katana",0,0),
    new Quotes("Not all that glitters is gold","Katana",0,0),
    new Quotes("Better late than never","Katana",0,0),
    new Quotes("Coding is toothpaste","Katana",0,0),
  ]
  addNew(quote) {
    this.quotes.push(quote);
  }
  delete(i) {
    this.quotes.splice(i,1)
  }
  upVote(index) {
    this.quotes[index].upVotes++;
  }
  downVote(index) {
    this.quotes[index].downVotes++;
  }
}
