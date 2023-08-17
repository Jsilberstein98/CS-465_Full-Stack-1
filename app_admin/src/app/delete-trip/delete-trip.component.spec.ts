import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTripComponent } from './delete-trip.component';

describe('DeleteTripComponent', () => {
  let component: DeleteTripComponent;
  let fixture: ComponentFixture<DeleteTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
