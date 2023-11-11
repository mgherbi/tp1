import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementdetailsComponent } from './departementdetails.component';

describe('DepartementdetailsComponent', () => {
  let component: DepartementdetailsComponent;
  let fixture: ComponentFixture<DepartementdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartementdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartementdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
