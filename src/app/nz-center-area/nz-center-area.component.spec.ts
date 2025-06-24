import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzCenterAreaComponent } from './nz-center-area.component';

describe('NzCenterAreaComponent', () => {
  let component: NzCenterAreaComponent;
  let fixture: ComponentFixture<NzCenterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzCenterAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzCenterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
