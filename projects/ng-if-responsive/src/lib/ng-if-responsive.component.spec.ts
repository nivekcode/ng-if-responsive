import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfResponsiveComponent } from './ng-if-responsive.component';

describe('NgIfResponsiveComponent', () => {
  let component: NgIfResponsiveComponent;
  let fixture: ComponentFixture<NgIfResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
