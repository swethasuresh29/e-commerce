import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductviewComponent } from './adminproductview.component';

describe('AdminproductviewComponent', () => {
  let component: AdminproductviewComponent;
  let fixture: ComponentFixture<AdminproductviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminproductviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminproductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
