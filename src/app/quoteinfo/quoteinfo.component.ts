import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{Quotes} from '../quotes';

@Component({
  selector: 'app-quoteinfo',
  templateUrl: './quoteinfo.component.html',
  styleUrls: ['./quoteinfo.component.css']
})
export class QuoteinfoComponent implements OnInit {
  newQuote =new Quotes("","",0,0)
  @Output() addQuote=new EventEmitter();

  add() {
    this.addQuote.emit(this.newQuote);
    this.newQuote =new Quotes("","",0,0)
  }
  constructor() { }

  ngOnInit() {
  }

}
