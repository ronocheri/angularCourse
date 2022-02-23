import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getProuducts()
  }

  items:any[]=new Array();

  getProuducts():void{
    try{

      for(let i=0; i<5;i++)
      {
          this.items.push(
            {
              name:'KOKO '+i,
              price:i*10
            }
          )
      }
    }
    catch (error){

    }
  }

}
