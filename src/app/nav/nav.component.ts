import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  
  
  prod:products=new products();
  prod_array:string[]=['blue','shadow']
  ngOnInit(): void {
  }

}
class products
{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}
