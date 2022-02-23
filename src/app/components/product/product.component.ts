import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product.item';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
_watch:TimeService

constructor(private watch:TimeService) {
  this._watch=watch;
  console.log(this._watch.getTimer())
  
  }

  @Input()
  model?:Product;
  ngOnInit(): void {
  }

  setProductClass():any{
    if(this.model!=null && this.model.price>2)
      return 'expensive'
    else
    return 'cheap'
  }
}
