import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzInfoItemComponent } from './nz-info-item.component';

describe('NzInfoItemComponent', () => {
  let component: NzInfoItemComponent;
  let fixture: ComponentFixture<NzInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzInfoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
