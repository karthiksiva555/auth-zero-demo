import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcallbackComponent } from './newcallback.component';

describe('NewcallbackComponent', () => {
  let component: NewcallbackComponent;
  let fixture: ComponentFixture<NewcallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
