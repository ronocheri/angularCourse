import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcacheComponent } from './readcache.component';

describe('ReadcacheComponent', () => {
  let component: ReadcacheComponent;
  let fixture: ComponentFixture<ReadcacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadcacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadcacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
