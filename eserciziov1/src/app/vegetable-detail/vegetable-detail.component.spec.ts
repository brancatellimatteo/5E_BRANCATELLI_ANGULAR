import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesDetailComponent } from './vegetables-detail.component';

describe('VegetablesDetailComponent', () => {
  let component: VegetablesDetailComponent;
  let fixture: ComponentFixture<VegetablesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
