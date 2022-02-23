import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-readcache',
  templateUrl: './readcache.component.html',
  styleUrls: ['./readcache.component.css']
})
export class ReadcacheComponent implements OnInit {
value:string='';

  constructor(private cache: CacheService) { }

  ngOnInit(): void {
  }

}
